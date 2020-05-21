import React, {Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { Grid } from '@material-ui/core'

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
                <AppBar title="Enter Player Details" />
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