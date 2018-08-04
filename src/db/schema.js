export default async (db) => {
  if (!await db.schema.hasTable('usuarios')) {
    await db.schema.createTable('usuarios', (t) => {
      t.string('nome')
    })
  }
  if (!await db.schema.hasTable('acolhidos')) {
    await db.schema.createTable('acolhidos', (t) => {
      t.string('nome')
      t.date('nascimento')
      t.string('mae')
      t.string('pai')
      t.string('rg')
      t.string('cpf')
      t.string('estado_civil')
      t.string('de_onde')
      t.string('para_onde')
      t.integer('tempo_na_rua')
      t.string('motivo')
      t.string('religiao')
      t.boolean('batismo')
      t.boolean('primeira_comunhao')
      t.boolean('crisma')
      t.dateTime('entrada')
      t.dateTime('saida')
      t.dateTime('cadastrado_em')
      t.integer('usuario_id')
    })
  }
  if (!await db.schema.hasTable('enderecos')) {
    await db.schema.createTable('enderecos', (t) => {
      t.integer('acolhido_id')
      t.string('logradouro')
      t.string('numero')
      t.string('complemento')
      t.string('bairro')
      t.string('cidade')
      t.string('uf')
    })
  }
  if (!await db.schema.hasTable('telefones')) {
    await db.schema.createTable('telefones', (t) => {
      t.integer('acolhido_id')
      t.string('ddd')
      t.string('numero')
      t.boolean('celular')
    })
  }
  if (!await db.schema.hasTable('saude')) {
    await db.schema.createTable('saude', (t) => {
      t.integer('acolhido_id')
      t.string('sus')
      t.integer('ultima_consulta_ha')
      t.boolean('convulsoes')
    })
  }
  if (!await db.schema.hasTable('medicamentos')) {
    await db.schema.createTable('medicamentos', (t) => {
      t.integer('saude_id')
      t.string('nome')
    })
  }
  if (!await db.schema.hasTable('vicios')) {
    await db.schema.createTable('vicios', (t) => {
      t.integer('acolhido_id')
      t.string('substancia')
    })
  }
  if (!await db.schema.hasTable('policial')) {
    await db.schema.createTable('policial', (t) => {
      t.integer('acolhido_id')
      t.integer('tempo_preso')
      t.string('artigo')
    })
  }
  if (!await db.schema.hasTable('pertences')) {
    await db.schema.createTable('pertences', (t) => {
      t.integer('acolhido_id')
      t.string('descricao')
    })
  }
  if (!await db.schema.hasTable('servicos')) {
    await db.schema.createTable('servicos', (t) => {
      t.integer('acolhido_id')
      t.integer('refeicoes')
      t.integer('banhos')
      t.integer('sabonetes')
      t.integer('barbeadores')
      t.integer('cortes_de_cabelo')
    })
  }
}
