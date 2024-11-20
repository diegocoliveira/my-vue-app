# Meu Projeto com Yarn 2, Vite, Vue.js 3, TailwindCSS, DaisyUI e ESLint (Google)

Este é um projeto configurado para trabalhar com **Yarn 2 (Berry)**, **Vite**, **Vue.js 3**, **TailwindCSS**, **DaisyUI**, e **ESLint** com o padrão **Google**.

---

## **Criar Projeto**

### 1. **Crie a pasta do projeto (se ainda não existir):** Caso a pasta my-vue-app não exista, crie-a com o comando:

```bash
mkdir my-vue-app
```

### 2. **Acesse a pasta do projeto:** Navegue até a pasta recém-criada:

```bash
cd my-vue-app
```

---

## **Configurações do Projeto**

### **1. Instalar Yarn 2 (Berry)**

Se o Yarn 2 ainda não estiver configurado, inicialize no diretório do projeto:

```bash
corepack enable
yarn init -2
yarn config set nodeLinker pnp
```

---

### **2. Criar o Projeto com Vite e Vue.js 3**

Crie o projeto base:

```bash
yarn create vite . --template vue
```

---

### **3. Configurar TailwindCSS**

#### **3.1 Instalar TailwindCSS**

```bash
yarn add -D tailwindcss postcss autoprefixer
yarn tailwindcss init
```

#### **3.2 Configurar Tailwind**

No arquivo `tailwind.config.js`:

```javascript
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

#### **3.3 Importar Tailwind no CSS**

No arquivo `src/assets/main.css`, adicione:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Importe o arquivo no `main.js`:

```javascript
import "./assets/main.css";
```

---

### **4. Configurar DaisyUI**

#### **4.1 Instalar DaisyUI**

```bash
yarn add daisyui
```

#### **4.2 Configurar DaisyUI**

No arquivo `tailwind.config.js`:

```javascript
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"], // Escolha os temas
  },
};
```

---

### **5. Configurar ESLint (Padrão Google)**

#### **5.1 Instalar ESLint**

```bash
yarn add -D eslint eslint-config-google eslint-plugin-vue
```

#### **5.2 Configurar ESLint**

Inicialize o ESLint:

```bash
yarn eslint --init
```

Responda às perguntas:

- **How would you like to use ESLint?**: _To check syntax, find problems, and enforce code style_
- **What type of modules does your project use?**: _JavaScript modules (import/export)_
- **Which framework does your project use?**: _Vue.js_
- **Does your project use TypeScript?**: _No_
- **Where does your code run?**: _Browser_
- **How would you like to define a style for your project?**: _Use a popular style guide_
- **Which style guide do you want to follow?**: _Google_
- **What format do you want your config file to be in?**: _JSON_

Atualize o `.eslintrc.json`:

```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": ["eslint:recommended", "plugin:vue/vue3-recommended", "google"],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["vue"],
  "rules": {
    "vue/multi-word-component-names": "off"
  }
}
```

---

### **6. Iniciar o Projeto**

Execute o servidor de desenvolvimento:

```bash
yarn dev
```

Abra o navegador no endereço exibido.

---

## **Recomendações de Plugins para VS Code**

### **Para Vue.js**

- [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

### **Para TailwindCSS**

- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

### **Para ESLint**

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

### **Outros**

- [Prettier - Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv)

---

## **Configurações Adicionais para VS Code**

Adicione ao arquivo `settings.json` do VS Code:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["javascript", "javascriptreact", "vue"],
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

---

Com essas etapas, seu ambiente de desenvolvimento está configurado e pronto para iniciar! 🚀
