// 2. Confirmar que se importo correctamente la colección en la base de datos students con un count en el shell de mongo:
// db.grades.count()
//     3. Encuentra todas las calificaciones del estudiante con el id número 4
// db.grades.find({ student_id: 4 })
// 4.¿Cuántos registros hay de tipo exam?
//     db.grades.find({"type":"exam"}).count()
//     5.¿Cuántos registros hay de tipo homework?
//     db.grades.find({"type":"homework"}).count()
//     6.¿Cuántos registros hay de tipo quiz?
//     db.grades.find({"type":"quiz"}).count()
//     7. Elimina todas las calificaciones del estudiante con el id numero 3 y realiza un count a la base de datos
//     db.grades.remove({"student_id":3})
//     db.grades.count()
// 8.¿Qué estudiantes obtuvieron 75.29561445722392 en una tarea?
//     db.grades.find({"score":75.29561445722392})
//     9. Actualiza las calificaciones del registro con el id 50906d7fa3c412bb040eb591 por 100
//     db.grades.update({_id:ObjectId("50906d7fa3c412bb040eb591")},{$set:{score:100}})
// 10. ¿A que estudiante le pertenece esa calificación(oid)?
//     db.grades.find({"_id":ObjectId('50906d7fa3c412bb040eb591')})