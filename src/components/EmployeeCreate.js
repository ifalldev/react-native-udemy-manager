import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input 
            label="Name"
            placeholder="Your Name"
          />
        </CardSection>

        <CardSection>
          <Input 
            label="Phone"
            placeholder="(11) 9999 9999"
          />
        </CardSection>

        <CardSection>
          <Button />
        </CardSection>
      </Card>
    );
  }
}

export default EmployeeCreate;
