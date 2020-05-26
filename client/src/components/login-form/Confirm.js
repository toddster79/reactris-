import React, {Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import { List, ListItem } from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'
import { Grid } from '@material-ui/core' 
import { StyledLoginForm } from '../styles/StyledLoginForm';

export class UserPersonalDetails extends Component {
    continue = e => {
        e.preventDefault() 
        // Process Form   
        this.props.nextStep()
    } 

    back = e => {
        e.preventDefault()
        this.props.prevStep()
    }

    render() { 
        const { values: { firstName, lastName, email, occupation, city, bio } } = this.props 
        return (
            <MuiThemeProvider>
                <React.Fragment> 
                    <AppBar title="REACTRIS: Confirm Info" /> 
                    <StyledLoginForm>
                    <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center" 
                    > 
                    <List>
                        <ListItem 
                            primaryText="First Name"
                            secondaryText={ firstName }
                        />
                        <ListItem 
                            primaryText="Last Name"
                            secondaryText={ lastName }
                        />
                        <ListItem 
                            primaryText="Email"
                            secondaryText={ email }
                        />
                        <ListItem 
                            primaryText="Occupation"
                            secondaryText={ occupation }
                        />
                        <ListItem 
                            primaryText="City"
                            secondaryText={ city }
                        />
                        <ListItem 
                            primaryText="Bio"
                            secondaryText={ bio }
                        />
                    </List>
                    <RaisedButton 
                        label="Confirm & Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    /> 
                    <RaisedButton 
                        label="Back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
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





 
export default UserPersonalDetails