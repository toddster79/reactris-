import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { Grid } from '@material-ui/core'
import { StyledLoginForm } from '../styles/StyledLoginForm';


export class UserDetails extends Component {
    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }
    render() { 
        const { values, handleChange } = this.props 
        return (
            <MuiThemeProvider> 
                <React.Fragment> 
                <AppBar title="REACTRIS: Player Details" />
                <StyledLoginForm>
                    <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    >
                    <TextField 
                        hintText="Enter Your First name"
                        floatingLabelText="First Name"
                        onChange={handleChange('firstName')}
                        defaultValue={values.firstName}
                        margin="normal"
                    /> 
                    <br/> 
                    <TextField 
                        hintText="Enter Your Last name"
                        floatingLabelText="Last Name"
                        onChange={handleChange('lastName')}
                        defaultValue={values.lastName}
                        margin="normal"
                    /> 
                    <br/>
                    <TextField 
                        hintText="Enter Your Email"
                        floatingLabelText="Email"
                        onChange={handleChange('email')}    
                        defaultValue={values.email}
                        margin="normal"
                    />  
                    <br/> 
                    <RaisedButton 
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                    </Grid>
                    </StyledLoginForm>
                </React.Fragment>
            </MuiThemeProvider>
        )
    } 
    } 

    const styles = {
        button: {
            margin: 15
        }
} 

 
export default UserDetails