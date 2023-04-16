const student_model = (sequelize, data_type) => {
    const Student = sequelize.define('Student', {
        name:   { type: sequelize.STRING, allowNull: false },
        email:  { type: sequelize.STRING, allowNull: false },
        age:    { type: sequelize.INTEGER, allowNull: false },
        weight: { type: sequelize.FLOAT, allowNull: false },
        height: { type: sequelize.FLOAT, allowNull: false }
    }, {
        tableName: 'students'
    });

    return Student;
}

modele.exports = student_model;