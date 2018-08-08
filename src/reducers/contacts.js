import {
  ADD_CONTACT,
  DELETE_CONTACT,
  EDIT_CONTACT
} from '../constants/ActionTypes'

import asset1 from '../assets/faces/1.jpg';
import asset2 from '../assets/faces/2.jpg';
import asset3 from '../assets/faces/3.jpg';
import asset4 from '../assets/faces/4.jpg';
import asset5 from '../assets/faces/5.jpg';
import asset6 from '../assets/faces/6.jpg';
import asset7 from '../assets/faces/7.jpg';
import asset8 from '../assets/faces/8.jpg';
import asset9 from '../assets/faces/9.jpg';
import asset10 from '../assets/faces/10.jpg';
import asset11 from '../assets/faces/11.jpg';
import asset12 from '../assets/faces/12.jpg';
import asset13 from '../assets/faces/13.jpg';
import asset14 from '../assets/faces/14.jpg';
import asset15 from '../assets/faces/15.jpg';




const initialState = [
  {
    id: 1,
    firstName : 'Terrence S.',
    lastName : 'Hatfield',
    tel: '651-603-1723',
    email: 'TerrenceSHatfield@rhyta.com',
    avatarUrl: asset1
  },
  {
    id: 2,
    firstName : 'Chris M.',
    lastName : 'Manning',
    tel: '513-307-5859',
    email: 'ChrisMManning@dayrep.com',
    avatarUrl: asset2
  },
  {
    id: 3,
    firstName : 'Ricky M.',
    lastName : 'Digiacomo',
    tel: '918-774-0199',
    email: 'RickyMDigiacomo@teleworm.us',
    avatarUrl: asset3
  },
  {
    id: 4,
    firstName : 'Michael K.',
    lastName : 'Bayne',
    tel: '702-989-5145',
    email: 'MichaelKBayne@rhyta.com',
    avatarUrl: asset4
  },
  {
    id: 5,
    firstName : 'John I.',
    lastName : 'Wilson',
    tel: '318-292-6700',
    email: 'JohnIWilson@dayrep.com',
    avatarUrl: asset5
  },
  {
    id: 6,
    firstName : 'Rodolfo P.',
    lastName : 'Robinett',
    tel: '803-557-9815',
    email: 'RodolfoPRobinett@jourrapide.com',
    avatarUrl: asset6
  }

]

export default function contacts(state = initialState, action) {
  let contact = action.contact;

  switch (action.type) {

    case ADD_CONTACT:
      let id = state.reduce((maxId, c) => Math.max(c.id, maxId), -1) + 1
      return [
        ...state,
        {
          id: id,
          firstName: contact.firstName,
          lastName: contact.lastName,
          tel: contact.tel,
          email: contact.email,
          avatarUrl: (require( `../assets/faces/${id}.jpg`))
        }
      ]

    case DELETE_CONTACT:
      return state.filter(c =>
        c.id !== contact.id
      )

    case EDIT_CONTACT:
      return state.map(c =>
        c.id === contact.id ?
          { ...c,
            firstName: contact.firstName,
            lastName: contact.lastName,
            tel: contact.tel,
            email: contact.email
          } :
          c
      )

    default:
      return state
  }
}
