# Plano de Refatoração de Design Radical (Expandido)

**Versão:** 2.0
**Status:** Em Execução

Este documento descreve o plano de ação detalhado para a reestruturação visual completa da plataforma XEQUEMATH. O objetivo é criar uma identidade visual "Futurista & Engajadora".

---

## 1. Filosofia do Novo Design: "Futurista & Engajador"

O pilar do novo design é transformar a interface em uma experiência imersiva, moderna e visualmente rica, que inspire criatividade e pareça tecnologicamente avançada.

1.1. **Paleta de Cores e Gradientes Dinâmicos:**
    - As cores base (azuis, âmbares, roxos) serão o coração da identidade.
    - **Aplicação:** Gradientes serão usados em fundos de página, componentes-chave e interações (hover).
    - **Animação:** Os gradientes de fundo terão uma animação sutil e lenta, mudando de ângulo e cor para dar uma sensação de ambiente vivo e digital. A biblioteca `framer-motion` pode ser usada para isso.
    - **Exemplo de Gradiente (Fundo Principal):** `linear-gradient(120deg, #0f172a, #1e3a8a, #4f46e5)`.

1.2. **Glassmorphism (Efeito de Vidro Fosco):**
    - Será o principal material para superfícies de UI como cards, modais e barras de navegação.
    - **Estilo:** `background-color: rgba(255, 255, 255, 0.1); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.2);`
    - **Propósito:** Criar uma hierarquia visual clara, permitindo que o fundo dinâmico seja visível através dos painéis, dando profundidade e contexto.

1.3. **Tipografia e Escala:**
    - **Fonte Principal:** `Inter` ou uma fonte similar (sans-serif moderna) para todo o texto, garantindo excelente legibilidade em todas as telas.
    - **Fonte de Destaque (Serif):** Uma fonte serifada (ex: `Lora` ou `Playfair Display`) será usada para títulos principais (H1) para criar um contraste elegante.
    - **Escala Tipográfica:** Definiremos uma escala consistente (ex: 12px, 14px, 16px, 20px, 24px, 36px, 48px) para garantir harmonia visual.

1.4. **Iconografia e Microinterações:**
    - Utilizaremos a biblioteca `lucide-react` para ícones, garantindo consistência.
    - **Microinterações:** Ícones e botões terão animações sutis de feedback (ex: mudança de escala no clique, rotação suave no hover) para tornar a interface mais responsiva e viva.

---

## 2. Fase 1: Componentes Globais e Estrutura

Esta fase estabelece a fundação visual para todo o projeto.

2.1. **`app/layout.tsx`:**
    - O `body` receberá o fundo de gradiente animado.
    - A fonte principal será carregada e aplicada aqui.

2.2. **Componente: Header Flutuante (`app/components/header.tsx`)**
    - **Estilo:** Efeito "glassmorphism", flutuando no topo da página.
    - **Posicionamento:** `position: fixed` no topo, com um `margin` para centralização.
    - **Comportamento:** O header ficará visível constantemente nas páginas públicas.
    - **Links de Navegação:** Efeito de "underline" animado no link ativo e no hover.
    - **Botão de Login/Usuário:** Usará o estilo de botão primário, com gradiente no hover.
    - **Responsividade:** Em telas menores, os links de navegação serão substituídos por um ícone de menu (hamburger) que abre um menu flutuante em "glassmorphism".

2.3. **Componente: Card de Vidro (`app/components/glass-card.tsx`)**
    - **Estrutura:** Um componente reutilizável que aceita `children`.
    - **Estilo:** Implementará o efeito "glassmorphism" padrão.
    - **Interação (Hover):** No hover, uma borda em gradiente sutil aparecerá, e o card terá uma leve animação de "lift" (elevação) com `transform: translateY(-5px);`.

2.4. **Componente: Botões (`@/components/ui/button.tsx`)**
    - **Botão Primário:** Fundo sólido na cor de destaque (azul). No hover, o fundo se transforma em um gradiente de azul para roxo.
    - **Botão Secundário:** Borda sólida na cor de destaque. No hover, o fundo se preenche com a cor de destaque.
    - **Animação:** Transições suaves em `background-color`, `transform` e `box-shadow`.

---

## 3. Fase 2: Páginas Públicas e de Marketing

Refatoração das páginas que servem como o primeiro ponto de contato com o usuário.

3.1. **`app/page.tsx` (Homepage):**
    - **Hero Section:** Título principal (`H1` com fonte serifada) terá um efeito de texto em gradiente e talvez um brilho sutil (shiny effect). Subtítulo e botão de CTA em destaque.
    - **Grid de Recursos:** Os cards de recursos serão dispostos em um grid assimétrico. A `framer-motion` será usada para animar a entrada dos cards na tela com `staggerChildren`.

3.2. **`app/loja/page.tsx`:**
    - **Cards de Produto:** Serão uma variação do `GlassCard`. Uma imagem do produto ocupará a parte superior. No hover, uma sobreposição de gradiente escuro aparecerá na imagem, revelando um botão "Adicionar ao Carrinho".
    - **Filtros:** Os botões de filtro terão um estado ativo claro, com fundo preenchido.

3.3. **`app/login/page.tsx` e `app/request-invitation/page.tsx`:**
    - **Layout:** O formulário será um `GlassCard` centralizado, que parece flutuar sobre o fundo animado.
    - **Borda do Card:** O card terá uma borda em gradiente animado para atrair o foco.
    - **Inputs:** Campos de formulário com fundo transparente, borda inferior sutil, que se destaca com a cor de destaque no `focus`.

---

## 4. Fase 3: Páginas da Aplicação (Área Logada)

Criação de um layout de dashboard coeso para a experiência do usuário logado.

4.1. **Layout do Dashboard (`app/dashboard/layout.tsx`):**
    - **Sidebar Persistente:** Uma barra lateral à esquerda, com efeito "glassmorphism".
    - **Navegação da Sidebar:** Apenas ícones serão visíveis por padrão. Ao passar o mouse (hover), um `tooltip` com o nome da página aparecerá. A barra poderá ser expandida para mostrar ícones e texto.
    - **Link Ativo na Sidebar:** O ícone do link ativo terá um fundo sólido com a cor de destaque.

4.2. **`app/assistente/page.tsx`:**
    - **Layout:** Usará o novo layout de dashboard.
    - **Cards de Funcionalidade:** Serão `GlassCard` com um ícone grande, título e descrição. No hover, o ícone terá uma animação sutil (ex: rotação ou pulso).

4.3. **`app/campanhas/page.tsx`:**
    - **Visualização de Dados:** Gráficos (usando `Recharts` ou similar) serão redesenhados para usar preenchimentos de gradiente, alinhados com a nova identidade visual.
    - **Tabelas:** Linhas da tabela terão um fundo semi-transparente. No hover, a linha ganhará um destaque sutil. Células interativas terão o mesmo feedback dos botões.

4.4. **`app/assistente/material-grafico/page.tsx`:**
    - **Modo Imersivo:** Esta página usará uma variação do layout de dashboard onde a área de conteúdo ocupa a maior parte da tela.
    - **Painel de Controles Flutuante:** Os inputs e controles para gerar a arte ficarão em um painel "glassmorphism" que pode ser arrastado ou minimizado pelo usuário para não atrapalhar a visualização do resultado.
    - **Estado de Geração:** Durante a geração da imagem, a área de resultado exibirá um efeito de "blur" com um loader de gradiente pulsante no centro, mostrando o progresso de forma visualmente interessante.

