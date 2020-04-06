import React from 'react';
import { ReactComponent as SimpleUser } from '../../assets/icons/coronavirus.svg';
import { ReactComponent as DoctorUser } from '../../assets/icons/doctor.svg';

type UserType = {
    icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    name: string;
    comment: string;
    time: string;
};

export type UserConfigType ={
    users: UserType[];
};

export const usersData: UserConfigType = {
    users: [{
        icon: SimpleUser,
        name: 'jonathandunn',
        comment: 'Good point! There are travel bloggers. Then there are freelancers: coders mainly',
        time: '3 hours ago',
    }, {
        icon: DoctorUser,
        name: 'roberto88',
        comment: 'Not one family in amongst that. Being nomadic is easier when you only have 1 person to worry about',
        time: '3 hours ago',
    }, {
        icon: SimpleUser,
        name: 'danielrubinho',
        comment: 'Not saiyng it is not doable, some good friends of mine manage it but would have been a better article with a 50/50',
        time: '4 hours ago',
    }, {
        icon: DoctorUser,
        name: 'elizabethcorvel',
        comment: 'here people do business from the road (running an IT company, travelling and filming their trave',
        time: '5 hours ago',
    }],
};