# 🧠 Prisma ORM — Overview de Queries

## Como o Prisma funciona (mental model rápido)

Você interage com o banco usando um **client gerado** baseado no seu schema.
Cada model vira um objeto com métodos (`findMany`, `create`, etc).

Estrutura geral:

```ts
prisma.model.metodo({
  parametros
})
```

---

# 🔎 Métodos principais

## `findMany`

Busca múltiplos registros.

**Quando usar:** listas, filtros, paginação

```ts
prisma.user.findMany({
  where: {...},
  select: {...},
  include: {...},
  orderBy: {...},
  skip: 0,
  take: 10
})
```

---

## `findUnique`

Busca **um único registro** por campo único.

**Quando usar:** ID, email, chave única

```ts
prisma.user.findUnique({
  where: { id: "..." }
})
```

---

## `findFirst`

Busca o **primeiro que bater com o filtro**.

**Quando usar:** quando não é único, mas você só quer um

```ts
prisma.user.findFirst({
  where: {...},
  orderBy: {...}
})
```

---

# 🎯 `where` (o coração das queries)

Define filtros.

## Básico

```ts
where: {
  name: "João",
  age: 20
}
```

---

## Operadores

```ts
where: {
  age: {
    gt: 18,
    lt: 30
  }
}
```

### Principais operadores:

* `equals`
* `not`
* `in` / `notIn`
* `lt`, `lte`, `gt`, `gte`
* `contains`
* `startsWith`
* `endsWith`

---

## Lógica (AND / OR / NOT)

```ts
where: {
  AND: [
    { age: { gt: 18 } },
    { active: true }
  ],
  OR: [
    { role: "ADMIN" },
    { role: "USER" }
  ],
  NOT: {
    banned: true
  }
}
```

---

## Relacionamentos

```ts
where: {
  posts: {
    some: {
      published: true
    }
  }
}
```

Outros:

* `some`
* `every`
* `none`

---

# 🎯 `select` vs `include`

## `select` (campos específicos)

```ts
select: {
  id: true,
  name: true
}
```

## `include` (relacionamentos)

```ts
include: {
  posts: true
}
```

---

# 📊 Ordenação

```ts
orderBy: {
  createdAt: "desc"
}
```

Múltiplos:

```ts
orderBy: [
  { role: "asc" },
  { createdAt: "desc" }
]
```

---

# 📦 Paginação

```ts
skip: 10,   // pula
take: 10    // limita
```

Cursor-based:

```ts
cursor: { id: "..." },
take: 10
```

---

# 🔢 `distinct`

Remove duplicados por campo:

```ts
distinct: ["email"]
```

---

# 🧮 Agregações

```ts
prisma.user.aggregate({
  _count: true,
  _avg: { age: true }
})
```

---

# 🔄 Outras operações importantes

## `create`

```ts
data: {
  name: "...",
  email: "..."
}
```

## `update`

```ts
where: { id: "..." },
data: {...}
```

## `delete`

```ts
where: { id: "..." }
```

## `upsert`

```ts
where: {...},
update: {...},
create: {...}
```

---

# 🧩 Exemplo completo (lógico)

```ts
prisma.user.findMany({
  where: {
    age: { gte: 18 },
    posts: {
      some: { published: true }
    }
  },
  select: {
    id: true,
    name: true
  },
  orderBy: {
    createdAt: "desc"
  },
  skip: 0,
  take: 10
})
```

---

# ⚡ Resumo mental rápido

* `where` → filtra
* `select/include` → define o retorno
* `orderBy` → ordena
* `skip/take` → pagina
* `findMany` → lista
* `findUnique` → único
* `findFirst` → primeiro match
