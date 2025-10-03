
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { requestInvitationSchema } from "@/app/schemas/request-invitation";
import { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

type FormData = z.infer<typeof requestInvitationSchema>;

export default function RequestInvitationPage() {
  const [submitMessage, setSubmitMessage] = useState("");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(requestInvitationSchema),
  });

  const email = watch("email");

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("/api/request-invitation", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitMessage(result.message);
        setTimeout(() => {
          router.push("/");
        }, 3000);
      } else {
        setSubmitMessage(result.message || "Ocorreu um erro ao enviar sua solicitação.");
      }
    } catch (error) {
      console.error("Error submitting invitation request:", error);
      setSubmitMessage("Ocorreu um erro ao enviar sua solicitação.");
    }
  };

  const isUnebEmail = email?.endsWith("@uneb.br");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Solicitar Convite
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Para ter acesso à plataforma, por favor, solicite um convite.
          </p>
        </div>

        {submitMessage ? (
          <div className="p-4 text-center text-green-700 bg-green-100 rounded-md">
            {submitMessage}
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu-email@uneb.br"
                {...register("email")}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <Collapsible open={!isUnebEmail && !!email}>
              <CollapsibleContent className="space-y-6">
                <div>
                  <Label htmlFor="justification">
                    Justificativa para uso de e-mail pessoal
                  </Label>
                  <textarea
                    id="justification"
                    {...register("justification")}
                    className="w-full px-3 py-2 text-gray-900 bg-transparent border rounded-md shadow-sm border-gray-300 focus:outline-none focus:ring-primary focus:border-primary dark:border-gray-600 dark:text-gray-100"
                  />
                  {errors.justification && <p className="text-red-500 text-sm mt-1">{errors.justification.message}</p>}
                </div>
                <div>
                  <Label htmlFor="evidence">Anexar Evidência</Label>
                  <Input
                    id="evidence"
                    type="file"
                    {...register("evidence")}
                  />
                  {errors.evidence && <p className="text-red-500 text-sm mt-1">{errors.evidence.message}</p>}
                </div>
              </CollapsibleContent>
            </Collapsible>

            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Solicitar Convite"}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
