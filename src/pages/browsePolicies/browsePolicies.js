import React from 'react';
import { Link } from 'react-router-dom';
import DropdownContainer from '../../components/dropdown/dropdown.js';
import PolicyContainer from '../../components/policyContainer/policyContainer.js';
import './browsePolicies.css';


// -------------------------------------------------------------------------------------------------------------------------------------------------------------------


//arrays declaration
const POLICIES = [
  {
    id: 'policy-0',
    name: 'Protection Scheme 1',
    description: 'Policy Sceme 1 offers wider coverage for your daily health problems.',
    defaultChecked: false,
  },
  {
    id: 'policy-1',
    name: 'Protection Scheme 2',
    description: 'Policy Scheme 2 provides buyer with a ton of benefits.',
    defaultChecked: false,
  },
  {
    id: 'policy-2',
    name: 'Protection Scheme 3',
    description: 'Protection Scheme 3 is not only good because it provides health protection, it also provides large payouts on hospitilization.',
    defaultChecked: false,
  },
  {
    id: 'policy-2',
    name: 'Protection Scheme 3',
    description: '',
    defaultChecked: false,
  },
  {
    id: 'policy-2',
    name: 'Protection Scheme 3',
    description: '',
    defaultChecked: false,
  },
  {
    id: 'policy-2',
    name: 'Protection Scheme 3',
    description: '',
    defaultChecked: false,
  },
  {
    id: 'policy-2',
    name: 'Protection Scheme 3',
    description: '',
    defaultChecked: false,
  },
  {
    id: 'policy-2',
    name: 'Protection Scheme 3',
    description: '',
    defaultChecked: false,
  },
  {
    id: 'policy-2',
    name: 'Protection Scheme 3',
    description: '',
    defaultChecked: false,
  },
  {
    id: 'policy-2',
    name: 'Protection Scheme 3',
    description: '',
    defaultChecked: false,
  },
  {
    id: 'policy-2',
    name: 'Protection Scheme 3',
    description: '',
    defaultChecked: false,
  },
  {
    id: 'policy-0',
    name: 'Protection Scheme 1',
    description: 'Policy Sceme 1 offers wider coverage for your daily health problems.',
    defaultChecked: false,
  },
  {
    id: 'policy-1',
    name: 'Protection Scheme 2',
    description: '',
    defaultChecked: false,
  },
  {
    id: 'policy-2',
    name: 'Protection Scheme 3',
    description: '',
    defaultChecked: false,
  },
  {
    id: 'policy-2',
    name: 'Protection Scheme 3',
    description: '',
    defaultChecked: false,
  },
  {
    id: 'policy-2',
    name: 'Protection Scheme 3',
    description: '',
    defaultChecked: false,
  },
  {
    id: 'policy-2',
    name: 'Protection Scheme 3',
    description: '',
    defaultChecked: false,
  },
  {
    id: 'policy-2',
    name: 'Protection Scheme 3',
    description: '',
    defaultChecked: false,
  },
  {
    id: 'policy-2',
    name: 'Protection Scheme 3',
    description: '',
    defaultChecked: false,
  },
  {
    id: 'policy-2',
    name: 'Protection Scheme 3',
    description: '',
    defaultChecked: false,
  },
  {
    id: 'policy-2',
    name: 'Protection Scheme 3',
    description: '',
    defaultChecked: false,
  },
  {
    id: 'policy-2',
    name: 'Protection Scheme 3',
    description: '',
    defaultChecked: false,
  },
  {
    id: 'policy-0',
    name: 'Protection Scheme 1',
    description: 'Policy Scheme 1 offers wider coverage for your daily health problems.',
    defaultChecked: false,
  },
  {
    id: 'policy-1',
    name: 'Protection Scheme 2',
    description: '',
    defaultChecked: false,
  },

  {
    id: 'policy-2',
    name: 'Protection Scheme 3',
    description: '',
    defaultChecked: false,
  },
  {
    id: 'policy-2',
    name: 'Protection Scheme 3',
    description: '',
    defaultChecked: false,
  },
  {
    id: 'policy-2',
    name: 'Protection Scheme 3',
    description: '',
    defaultChecked: false,
  },
  {
    id: 'policy-2',
    name: 'Protection Scheme 3',
    description: '',
    defaultChecked: false,
  },
  {
    id: 'policy-2',
    name: 'Protection Scheme 3',
    description: '',
    defaultChecked: false,
  },
  {
    id: 'policy-2',
    name: 'Protection Scheme 3',
    description: '',
    defaultChecked: false,
  },
  {
    id: 'policy-2',
    name: 'Protection Scheme 3',
    description: '',
    defaultChecked: false,
  },
  {
    id: 'policy-2',
    name: 'Protection Scheme 3',
    description: '',
    defaultChecked: false,
  },
];


var selectedPolicies = [
  {
    id: 'policy-2',
    name: 'Protection Scheme 3',
    description: '',
    defaultChecked: false,
  },
];

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------




//main function starts
const BrowsePolicies = () => {

  function addToSelectedChoices() {
    selectedPolicies = selectedPolicies.push()
  }


  function removeFromSelectedChoices() {
    selectedPolicies = selectedPolicies.splice()
  }


  function addOrRemove() {
    for (let i = 0; i < POLICIES.length; i++) {
      if (POLICIES[i].checked === true) {
        addToSelectedChoices()
      } else {
        removeFromSelectedChoices()
      }
    }
  }




  // -------------------------------------------------------------------------------------------------------------------------------------------------------------------


  const selectedPoliciesList = selectedPolicies.map(policy => (
    <PolicyContainer id={policy.id} name={policy.name} description={policy.description} defaultChecked={policy.defaultChecked} onClick={addOrRemove} />
  ));


  const policiesList = POLICIES.map(policy => (
    <PolicyContainer id={policy.id} name={policy.name} description={policy.description} defaultChecked={policy.defaultChecked} onClick={addOrRemove} />
  ));

  // -------------------------------------------------------------------------------------------------------------------------------------------------------------------


  var getPoliciesList = document.getElementsByClassName('policiesList');
  var getSelectedPoliciesList = document.getElementsByClassName('selectedPoliciesList');


  var isChecked = document.querySelector('#choiceCheckbox');

  // -------------------------------------------------------------------------------------------------------------------------------------------------------------------



  // function hideOrShowSelectedChoices() {

  //   if (isChecked === true) {
  //     // showSelectedChoices
  //     getSelectedPoliciesList.style.display = 'block';
  //     getPoliciesList.style.display = 'none';
  //   } else {
  //     // // showAllChoices
  //     getSelectedPoliciesList.style.display = 'none';
  //     getPoliciesList.style.display = 'block';
  //   }
  // alert(isChecked)
  // }


  // -------------------------------------------------------------------------------------------------------------------------------------------------------------------


  return (
    <div className='browsePolicies'>
      <div className="headerAndDropdown">
        <DropdownContainer />
      </div>

      <input type='hidden' value={false} />
      <input type='checkbox' id='choiceCheckbox' /> Show selected choices


      <div className='policiesBody'>

        <div className='policiesList'>
          <ul >
            {policiesList}

          </ul>
        </div>

        <div className='selectedPoliciesList'>
          <ul >
            {selectedPoliciesList}

          </ul>
        </div>
      </div>

      <div className='contactFormBtn' >
        <Link to='contactForm' className='toContactFormLink'>Request for help</Link>
      </div>



    </div>
  )
}


export default BrowsePolicies;
