# MoviesApp (Expo)

App de exemplo em React Native + Expo que demonstra:
- Navegação com React Navigation (Native Stack)
- Consumo de API REST (fetch)

Arquivos neste repositório prontos para subir no GitHub.

## Como usar

1. Instale o Expo CLI (se necessário):
   ```bash
   npm install -g expo-cli
   ```
2. No diretório do projeto, instale dependências:
   ```bash
   npm install
   npx expo install react-native-screens react-native-safe-area-context
   ```
   (ou `expo install ...` como preferir)
3. Rode o app:
   ```bash
   npm start
   ```
4. No app você encontrará:
   - Home (botão para Details)
   - Details (botão para Movies)
   - Movies (busca lista de filmes e exibe com FlatList)

