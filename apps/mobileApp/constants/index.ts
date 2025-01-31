import onboarding1 from "@/assets/images/onboarding1.png";
import signup from "@/assets/images/signUp.png";
import person from "@/assets/icons/person.png";
import phone from "@/assets/icons/phone.png";
import bell from "@/assets/icons/bell.png";
import CarInsuranceBanner from "@/assets/images/CarInsuranceBanner.png";
import RightArrow from "@/assets/icons/right-arrow.png";
import CarInsuranceIcon from "@/assets/icons/CarInsurance.jpeg";
import CommercialInsuranceIcon  from "@/assets/icons/CommercialInsurance.jpeg";
import HealthInsuranceIcon from "@/assets/icons/HealthInsurance.jpeg";
import TaxiInsuranceIcon from "@/assets/icons/TaxiInsurance.jpeg";
import TermLifeInsuranceIcon from "@/assets/icons/TermLifeInsurance.jpeg";
import TwoWheelerInsuranceIcon from "@/assets/icons/TwoWheelerInsurance.jpeg";
import HomeIcon from "@/assets/icons/home.png";
import ClaimsIcon from "@/assets/icons/claims.png";
import PoliciesIcon from "@/assets/icons/policies.png";
import AccountIcon from "@/assets/icons/account.png";
import HelpIcon from "@/assets/icons/help.png";

export const images = {
    onboarding1,
    signup,
    CarInsuranceBanner

    
}

export const icons = {
    HelpIcon,
    AccountIcon,
    PoliciesIcon,
    ClaimsIcon,
    HomeIcon,
    person,
    phone,
    bell,
    RightArrow,
    CarInsuranceIcon,
    TwoWheelerInsuranceIcon,
    CommercialInsuranceIcon,
    HealthInsuranceIcon,
    TaxiInsuranceIcon,
    TermLifeInsuranceIcon,
    
}


export const onboarding = [{
    id : 1,
    title : "The perfect ride is just a tape away!",
    description : "Your journey begins with Ryde. Find your ideal ride effortlessly",
    image : images.onboarding1
},

{
    id : 2,
    title : "The perfect ride is just a tape away 2!",
    description : "Your journey begins with Ryde. Find your ideal ride effortlessly",
    image : images.onboarding1,

},
{
    id : 3,
    title : "The perfect ride is just a tape away 3!",
    description : "Your journey begins with Ryde. Find your ideal ride effortlessly",
    image : images.onboarding1,

},
]

export const latestOffers = [
    {
        id : 1,
        icon : icons.TermLifeInsuranceIcon,
        title : "Term Life Insurance",
        description : "Secure your family's future with 1 crore life cover starting at just ₹500/month!",
        theme : "#FF814C",
        path: "/(root)/(insurance)/TermLifeInsurance"
    },
    {
        id : 2,
        icon : icons.CarInsuranceIcon,
        title : "Car Insurance",
        description : "Save upto 70% on your car insurance premium",
        theme : "#6300cc",
        path: "/(root)/(insurance)/CarInsurance"
    },
    {
        id : 3,
        icon : icons.HealthInsuranceIcon,
        title : "Health Insurance",
        description : "Your health, our priority – affordable health insurance plans for you and your family!",
        theme : "#15BF59",
        path: "/(root)/(insurance)/HealthInsurance"

    },

]

export const insuredProducts = [
    {
        id : 1,
        icon : icons.TermLifeInsuranceIcon,
        title : "Term Life Insurance",
        path: "/(root)/(insurance)/TermLifeInsurance"
    }
    ,
    {
        id : 2,
        icon : icons.HealthInsuranceIcon,
        title : "Health Insurance",
        path: "/(root)/(insurance)/HealthInsurance"

    },
    {
        id : 3,
        icon : icons.CarInsuranceIcon,
        title : "Car Insurance",
        path: "/(root)/(insurance)/CarInsurance"
    },
    {
        id : 4,
        icon : icons.TwoWheelerInsuranceIcon,
        title : "Two Wheeler Insurance",
        path: "/(root)/(insurance)/TwoWheelerInsurance"
    },
    {
        id : 5,
        icon : icons.TaxiInsuranceIcon,
        title : "Taxi Insurance",
        path: "/(root)/(insurance)/TaxiInsurance"
    },
    {
        id : 6,
        icon : icons.CommercialInsuranceIcon,
        title : "Commercial Insurance",
        path: "/(root)/(insurance)/CommercialInsurance"
    },
]

