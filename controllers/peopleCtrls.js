//this (index.js file) is where our db mongoose connection lives as well as our models
const db = require('../models') 


// PEOPLE INDEX ROUTE
const getPeople = async (req, res) => {
    // db.People.find({})  <-- db has all our models in it so we can use any of them here with one line! 
    //db.Model.query() <-- syntax
    try{
        const foundPeople = await db.Person.find({})
        if(!foundPeople){
            res.status(404).json({message: 'Cannot find People'})
        } else {
            res.status(200).json({data: foundPeople})
        }
    } catch(err) {
        res.status(400).json({error: err.message})
    }
    // res.send('getPeople')
}


// PEOPLE CREATE ROUTE
const createPeople = async (req, res) => {
    try{
        const createdPerson = await db.Person.create(req.body)
        createdPerson.save()
        if(!createdPerson){
            res.status(400).json({message: 'Cannot create Person'})
        } else {
            res.status(201).json({message: 'Person created', data: createdPerson, })
        }
    } catch(err) {
        res.status(400).json({error: err.message})
    }
    // res.send('createPeople')
}

// PEOPLE UPDATE ROUTE
const updatePerson = async (req, res) => {
    try{
        const updatedPerson = await db.Person.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if(!updatedPerson){
            res.status(400).json({message: 'Could not update person'})
        } else {
            res.status(200).json({Data: updatedPerson, message: "Person updated"})
        }
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}

// PEOPLE DESTROY ROUTE
const deletePerson = async (req, res) => {
    try {
        const deletedPerson = await db.Person.findByIdAndDelete(req.params.id)
        if(!deletedPerson){
            res.status(400).json({message: 'Could not delete person'})
        } else {
            res.status(200).json({Data: deletedPerson, message: "Person deleted"})
        }
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}



module.exports = {
    getPeople, 
    createPeople,
    updatePerson, 
    deletePerson
}