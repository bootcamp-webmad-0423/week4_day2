const express = require('express')

const app = express()

app.use(express.static('public'))
app.set("views", __dirname + "/views")
app.set("view engine", "hbs")

app.get('/', (req, res) => {
    res.render('home-page')
})

app.get('/alumno', (req, res) => {

    const studentInfo = {
        fullName: 'Gustavo Gesto',
        age: 33,
        campus: 'Madrid',
        bootcamp: '<strong>Web Dev</strong>',
        subjects: ['HTML', 'CSS', 'REACT', 'EXPRESS', 'NODE'],
        teacher: undefined,
        debt: 2500,
        confirmed: false,
        address: {
            street: 'Garía Whatever',
            numer: 22,
            zipCode: 28002
        }
    }

    res.render('student-info', studentInfo)
})

app.listen(5005, () => console.log('SERVIDOR LEVANTADO EN 5005'))