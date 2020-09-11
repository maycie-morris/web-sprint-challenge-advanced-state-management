import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import SmurfForm from './SmurfForm'


test('form should successfully submit inputs', () => {
    render(<SmurfForm />)

    const nameInput = screen.getByLabelText(/name/i)
    const ageInput = screen.getByLabelText(/age/i)
    const heightInput = screen.getByLabelText(/height/i)

    fireEvent.change(nameInput, { target: {value: 'Sleepy'} })
    fireEvent.change(ageInput, { target: {value: '134'} })
    fireEvent.change(heightInput, { target: {value: '2'} })

    const submitButton = screen.getByRole("button", /add new smurf/i)
    fireEvent.click(submitButton)
})