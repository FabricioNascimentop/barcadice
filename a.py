# Overview: Queries com Prisma

Aqui está um guia estruturado sobre como realizar queries com o Prisma Client.

---

## 1. Métodos Principais de Busca

Estes são os comandos que definem a ação principal sobre o modelo.

### `findUnique`
* **Como funciona:** Busca um único registro usando estritamente um identificador único (ID ou campo `@unique`).
* **Onde usar:** Quando possui o identificador exato (ex: carregar perfil por ID).
* **Lógica:**
    ```javascript
    modelo.findUnique({
      where: { campoUnico: 'valor' }
    })
    ```

### `findFirst`
* **Como funciona:** Retorna o primeiro registro que corresponder aos critérios. Aceita campos não-únicos.
* **Onde usar:** Para encontrar um registro específico baseado em condições comuns (ex: o post mais recente).
* **Lógica:**
    ```javascript
    modelo.findFirst({
      where: { campoComum: 'valor' },
      orderBy: { data: 'desc' }
    })
    ```

### `findMany`
* **Como funciona:** Retorna uma lista de registros (array). Sem filtros, retorna todos os dados.
* **Onde usar:** Listagens, feeds e relatórios.
* **Lógica:**
    ```javascript
    modelo.findMany({
      where: { condicao: true }
    })
    ```

---

## 2. Parâmetros de Configuração (Modificadores)

Estes parâmetros refinam os resultados dentro dos métodos de busca.

### `where` (Filtros)
* **Função:** Cláusula de condição. Aceita operadores como `contains`, `gt`/`lt` (maior/menor), `in`, `AND`, `OR` e `NOT`.
* **Lógica:**
    ```javascript
    {
      where: {
        OR: [
          { nome: { contains: 'busca' } },
          { idade: { gt: 18 } }
        ]
      }
    }
    ```

### `select` (Projeção)
* **Função:** Define quais colunas retornar. Útil para performance e segurança.
* **Lógica:**
    ```javascript
    {
      select: { campoDesejado: true, outroCampo: true }
    }
    ```

### `include` (Relacionamentos)
* **Função:** Realiza o "JOIN" para trazer dados de tabelas relacionadas.
* **Lógica:**
    ```javascript
    {
      include: { relacaoComOutraTabela: true }
    }
    ```

### `orderBy` (Ordenação)
* **Função:** Ordena os resultados (`asc` ou `desc`).
* **Lógica:**
    ```javascript
    {
      orderBy: { campoData: 'desc' }
    }
    ```

### `take` e `skip` (Paginação Offset)
* **Função:** `take` limita a quantidade; `skip` pula um número de registros.
* **Lógica:**
    ```javascript
    {
      skip: 10,
      take: 10
    }
    ```

### `cursor` (Paginação Cursor)
* **Função:** Inicia a busca a partir de um ID específico. Ideal para scroll infinito.
* **Lógica:**
    ```javascript
    {
      take: 10,
      skip: 1,
      cursor: { id: 'ultimo_id_visto' }
    }
    ```

---

## Estrutura de uma Query Combinada

```javascript
modelo.findMany({
  where: { /* 1. Filtra as linhas */ },
  include: { /* 2. Traz relações */ },
  orderBy: { /* 3. Ordena */ },
  take: 10,  /* 4. Limita */
  skip: 0    /* 5. Pagina */
})