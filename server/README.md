CREATE (p:Project { id: 1, name: "Система управления данными" })

MATCH (p:Project {id: 1})
DELETE p