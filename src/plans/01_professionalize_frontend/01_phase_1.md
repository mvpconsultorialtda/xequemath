
# Plano 1: Professionalizar o Frontend - Fase 1

## 1. Comando inicial do que deve ser feito

Nesta fase, o objetivo é começar a profissionalizar o frontend da aplicação. Isso envolve:

*   Criar uma página de "solicitação de convite" para acesso a áreas restritas.
*   Garantir que todas as rotas existentes estejam funcionando e redirecionar rotas quebradas para a página de solicitação de convite.
*   Simular o envio de formulários com mensagens de feedback para o usuário.

## 2. Olhar o guia de relatórios para encontrar os pontos onde tem os dados mais importantes

Consulte o arquivo `src/reports/00_guide.md` para obter uma visão geral da estrutura do projeto, tecnologias utilizadas e principais conceitos da plataforma. Os relatórios `03_technical_information.md` e `04_conceptual_information.md` serão particularmente úteis para entender a estrutura de rotas e os componentes existentes.

## 3. Tese de como deve ser implementada a ação

A tese é criar um fluxo de acesso restrito que simule um sistema de convites. Faremos o seguinte:

1.  Criaremos uma nova página em `app/request-invitation/page.tsx` que conterá um formulário para solicitar um convite. O formulário solicitará um e-mail da UNEB ou um e-mail comum com uma justificativa e um campo para anexar um comprovante.
2.  Vamos identificar todas as páginas que devem ser restritas.
3.  Para cada página restrita, vamos interceptar o acesso e redirecionar o usuário para a página `request-invitation`.
4.  Modificaremos os formulários existentes para exibir uma mensagem de sucesso após o "envio", simulando uma interação com o backend.

## 4. Checar arquivos que confirmem que a tese está certa

*   `app/layout.tsx`: Para entender a estrutura geral das páginas.
*   `app/page.tsx`: Para ver a página inicial e como a navegação é implementada.
*   `components/ui/button.tsx`, `components/ui/input.tsx`, `components/ui/label.tsx`: Para entender como criar o formulário de solicitação de convite.
*   `app/login/page.tsx`: Para entender como o formulário de login está estruturado e como podemos reutilizar alguns de seus estilos e componentes.
*   `next.config.mjs`: Para verificar as configurações de redirecionamento, se houver.

## 5. Se deu errado criar nova tese, se deu certo checar ainda mais arquivos que reinterem a ideia

A tese parece sólida. A verificação adicional de arquivos como `app/components/navigation.tsx` e `app/user-menu.tsx` ajudará a entender como os links de navegação são gerenciados e onde podemos precisar adicionar links para a página de solicitação de convite.

## 6. Implemente as melhorias

*   Crie o arquivo `app/request-invitation/page.tsx` com o formulário de solicitação de convite.
*   Verifique todas as rotas e corrija as que não estão funcionando.

## 7. Atualize agora todos os reports, inclusive e principalmente o guia de reports

*   **`src/reports/01_general_platform_explanation.md`**: Adicione uma seção explicando o novo fluxo de solicitação de convite.
*   **`src/reports/03_technical_information.md`**: Documente a nova rota `app/request-invitation/page.tsx`.
*   **`src/reports/04_conceptual_information.md`**: Adicione o conceito de "acesso restrito" e o fluxo de "solicitação de convite".
*   **`src/reports/00_guide.md`**: Atualize o guia para refletir as novas informações nos outros relatórios.

## 8. Faça um `pnpm run build` verifique erros e corrija caso hajam

Execute o comando `pnpm run build` para garantir que não há erros de compilação. Se houver, corrija-os.

## 9. Faça um comando novo que seja unico com add, commit e push de uma só vez

Execute o seguinte comando para salvar seu progresso:

`git add . && git commit -m "feat: implement request invitation flow and professionalize frontend" && git push`

## 10. Sugira passarmos para a proxima etapa do plano.

Após a conclusão bem-sucedida desta fase, sugiro que passemos para a "Fase 2: Aprimoramento da Experiência do Usuário", onde focaremos em refinar a interface do usuário e adicionar mais feedback visual para as ações do usuário.
