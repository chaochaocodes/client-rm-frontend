import React from 'react';
import Card from '@material-ui/core/Card';

const Profile = props => {
    <Card>
        <Image src={props.avatar}/>
        <CardHeader title={props.username}> </CardHeader>
    </Card>
}

export default Profile