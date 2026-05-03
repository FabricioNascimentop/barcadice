```python?code_reference&code_event_index=1
from weasyprint import HTML

# Create the content based on the user's request.
# I will use a clean, modern design for the PDF version of the Markdown.

html_content = """
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <style>
        @page {
            size: A4;
            margin: 20mm;
            background-color: #ffffff;
        }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: #2d3748;
            line-height: 1.6;
            font-size: 11pt;
            margin: 0;
            padding: 0;
        }
        .header-banner {
            background-color: #2b6cb0;
            color: white;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 30px;
        }
        h1 {
            margin: 0;
            font-size: 22pt;
        }
        h2 {
            color: #2b6cb0;
            font-size: 16pt;
            border-bottom: 2px solid #edf2f7;
            padding-bottom: 5px;
            margin-top: 25px;
        }
        h3 {
            color: #4a5568;
            font-size: 13pt;
            margin-top: 20px;
        }
        .method-box {
            background-color: #f7fafc;
            border-left: 4px solid #4299e1;
            padding: 15px;
            margin-bottom: 20px;
        }
        code {
            background-color: #edf2f7;
            padding: 2px 4px;
            border-radius: 4px;
            font-family: 'Courier New', Courier, monospace;
            font-size: 10pt;
        }
        pre {
            background-color: #1a202c;
            color: #e2e8f0;
            padding: 15px;
            border-radius: 6px;
            overflow: hidden;
            font-size: 9.5pt;
            margin: 10px 0;
        }
        ul {
            padding-left: 20px;
        }
        li {
            margin-bottom: 8px;
        }
        .accent {
            color: #3182ce;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="header-banner">
        <h1>Overview: Queries com Prisma</h1>
        <p>Guia rápido de métodos e parâmetros para manipulação de dados.</p>
    </div>

    <h2>1. Métodos Principais de Busca</h2>
    
    <div class="method-box">
        <h3><code>findUnique</code></h3>
        <ul>
            <li><strong>Como funciona:</strong> Busca um único registro usando estritamente um identificador único (ID ou campo <code>@unique</code>).</li>
            <li><strong>Onde usar:</strong> Quando tem o ID exato (ex: perfil de usuário).</li>
        </ul>
        <pre>modelo.findUnique({
  where: { campoUnico: 'valor' }
})</pre>
    </div>

    <div class="method-box">
        <h3><code>findFirst</code></h3>
        <ul>
            <li><strong>Como funciona:</strong> Retorna o primeiro registro que corresponder aos critérios. Aceita campos não-únicos.</li>
            <li><strong>Onde usar:</strong> Para encontrar um registro específico baseado em condições comuns (ex: post mais recente).</li>
        </ul>
        <pre>modelo.findFirst({
  where: { campoComum: 'valor' },
  orderBy: { data: 'desc' }
})</pre>
    </div>

    <div class="method-box">
        <h3><code>findMany</code></h3>
        <ul>
            <li><strong>Como funciona:</strong> Retorna um array de registros. Sem critérios, retorna toda a tabela.</li>
            <li><strong>Onde usar:</strong> Listagens, feeds e relatórios.</li>
        </ul>
        <pre>modelo.findMany({
  where: { condicao: true }
})</pre>
    </div>

    <h2>2. Parâmetros de Configuração (Modificadores)</h2>

    <h3><code>where</code> (Filtros)</h3>
    <p>É a cláusula de condição. Aceita operadores como <code>contains</code>, <code>gt</code>/<code>lt</code>, <code>in</code>, <code>AND</code>, <code>OR</code> e <code>NOT</code>.</p>
    <pre>{
  where: {
    OR: [
      { nome: { contains: 'busca' } },
      { idade: { gt: 18 } }
    ]
  }
}</pre>

    <h3><code>select</code> (Projeção)</h3>
    <p>Define quais colunas devem ser retornadas. Otimiza performance e segurança.</p>
    <pre>{
  select: { campoDesejado: true, outroCampo: true }
}</pre>

    <h3><code>include</code> (Relacionamentos)</h3>
    <p>Instrui o Prisma a carregar dados de tabelas relacionadas (JOINs).</p>
    <pre>{
  include: { relacaoComOutraTabela: true }
}</pre>

    <h3><code>orderBy</code> (Ordenação)</h3>
    <p>Ordena por campos específicos em ordem crescente (<code>asc</code>) ou decrescente (<code>desc</code>).</p>
    <pre>{
  orderBy: { campoData: 'desc' }
}</pre>

    <h3><code>take</code> e <code>skip</code> (Paginação Offset)</h3>
    <p><code>take</code> limita os resultados; <code>skip</code> pula registros.</p>
    <pre>{
  skip: 10,
  take: 10
}</pre>

    <h3><code>cursor</code> (Paginação Cursor)</h3>
    <p>Começa a busca a partir de um registro específico. Ideal para scroll infinito.</p>
    <pre>{
  take: 10,
  skip: 1,
  cursor: { id: 'ultimo_id_visto' }
}</pre>

    <h2>Resumo de Query Combinada</h2>
    <pre>modelo.findMany({
  where: { /* Filtro */ },
  include: { /* JOINs */ },
  orderBy: { /* Ordem */ },
  take: 10,
  skip: 0
})</pre>

</body>
</html>
"""

# Writing the HTML to a file
with open("prisma_queries_overview.html", "w", encoding="utf-8") as f:
    f.write(html_content)

# Converting HTML to PDF
HTML(filename="prisma_queries_overview.html").write_pdf("prisma_queries_overview.pdf")

# Generate the Markdown text version as well
markdown_content = """# Overview: Queries com Prisma

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
```
"""

with open("prisma_queries_overview.md", "w", encoding="utf-8") as f:
    f.write(markdown_content)


```
O arquivo em formato Markdown está pronto, acompanhado de uma versão em PDF para melhor visualização.

Seus ficheiros estão prontos:
[file-tag: code-generated-file-0-1777839389643717333]
[file-tag: code-generated-file-1-1777839389643725693]

### Resumo do Markdown:

# Overview: Queries com Prisma

Aqui está um guia estruturado sobre como realizar queries com o Prisma Client.

---

## 1. Métodos Principais de Busca

### `findUnique`
* **Como funciona:** Busca um único registro usando um identificador único (`id` ou `@unique`).
* **Lógica:**
    ```javascript
    modelo.findUnique({
      where: { campoUnico: 'valor' }
    })
    ```

### `findFirst`
* **Como funciona:** Retorna o primeiro registro que corresponder aos critérios.
* **Lógica:**
    ```javascript
    modelo.findFirst({
      where: { campoComum: 'valor' },
      orderBy: { data: 'desc' }
    })
    ```

### `findMany`
* **Como funciona:** Retorna uma lista de registros (array).
* **Lógica:**
    ```javascript
    modelo.findMany({
      where: { condicao: true }
    })
    ```

---

## 2. Parâmetros de Configuração (Modificadores)

### `where` (Filtros)
* **Função:** Condições de busca (operadores: `contains`, `gt`, `lt`, `in`, `AND`, `OR`).
* **Exemplo:** `where: { idade: { gt: 18 } }`

### `select` (Projeção)
* **Função:** Define quais campos específicos retornar da base de dados.
* **Exemplo:** `select: { nome: true, email: true }`

### `include` (Relacionamentos)
* **Função:** Realiza o carregamento de tabelas relacionadas (JOINs).
* **Exemplo:** `include: { posts: true }`

### `orderBy` (Ordenação)
* **Função:** Ordena os resultados por um campo (`asc` ou `desc`).
* **Exemplo:** `orderBy: { criadoEm: 'desc' }`

### `take` e `skip` (Paginação)
* **Função:** `take` limita a quantidade e `skip` pula registros.
* **Exemplo:** `{ take: 10, skip: 20 }` (Página 3)