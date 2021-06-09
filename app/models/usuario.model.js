module.exports = (sequelize, Sequilize) => {
  const Usuario = sequelize.define("usuario", {
    nome: {
      type: Sequilize.STRING,
    },
    id_perfil: {
      type: Sequilize.INTEGER,
    },
    ativo: {
      type: Sequilize.BOOLEAN,
    },
  });

  return Usuario;
};
