import { useNavigate } from 'react-router-dom';
import Profile from './components/profile';
import CVCompPart from './CVCompPart';
import Summary from './components/summary';
import MultiBlockCVPart from './components/multiBlockCVPart';

const profile = {
  name: "Alexander Gatland",
  title: "Fullstack Utvikler"
}

// eslint-disable-next-line no-unused-vars
const summary2 = {
  title: "Kompetansesammendrag",
  content: "Alexander har fullført bachelorgrad fra NTNU som dataingeniør. Gjennom bachelorgraden har han innhentet kompetanse innen diverse teknologier og områder innen utvikling, inkludert apputvikling, APIer, skytjenester, databaser og webutvikling med både front- og backend. Under studiet har det også vært fokus på agile arbeidsmetoder, teamarbeid og versjonskontroll.\n"+
 
  "Med verdifull erfaring fra en sommerjobb innen IT og en bacheloroppgave med ekstern klient, har Alexander opparbeidet seg solid erfaring i et reelt arbeidsmiljø. Under bacheloren har han demonstrert tett samarbeid med klienter gjennom ukentlige møter for prosjektplanlegging og statusoppdateringer. I en teambasert sommerjobb har han fått innsikt i utvikling i større og ukjente miljøer, og har dermed styrket sin tilpasningsevne.\n"+
   
  "Som utvikler er Alexander fleksibel og tilpasningsdyktig med kompetanse innen flere områder og trives med det meste innen utvikling. Er det noe han ikke allerede kan, så har han ingenting imot å lære det.\n"+
   
  "Alexander er en trivelig og omgjengelig kollega som setter stor pris på et hyggelig arbeidsmiljø. Han verdsetter kontinuerlig læring og deling av kunnskap, med et sterkt ønske om å både tilegne seg innsikt og bidra til andres vekst og utvikling.\n",
  keyQual: [
    ["Java", "Spring Boot", "C#", ".NET", "Python", "Python Flask"],
    ["JavaScript", "TypeScript", "React", "Angular"],
    ["PostgreSQL", "MySQL", "REST API"],
    ["Git", "GitHub", "Workflows", "Docker"],
    ["Azure", "Amazon Web Services (AWS)"]
  ]
}

const summary = {
  title: "Kompetansesammendrag",
  content: "Summary stuff",
  keyQual: [
    ["Java", "Spring Boot", "C#", ".NET", "Python", "Python Flask"],
    ["JavaScript", "TypeScript", "React", "Angular"],
    ["PostgreSQL", "MySQL", "REST API"],
    ["Git", "GitHub", "Workflows", "Docker"],
    ["Azure", "Amazon Web Services (AWS)"]
  ]
}

const projEx = {
  objects: [
    {
      employer: "Posten Bring",
      title: "Summer of PAPP",
      topic: "Cloud Infrastructure",
      description: "Prosjekt greier"
    },
    {
      employer: "",
      title: "",
      topic: "",
      description: ""
    },
  ]
}

const education = {
  objects: [
    {
      employer: "Norges Teknisk-Naturvitenskapelige Universitet (NTNU)",
      title: "Bachelor i Ingeniørfag, Data",
      topic: "",
      description: "utdannelse greier"
    }
  ]
}

const workEx = {
  objects: [
    {
      employer: "Experis",
      title: "Fullstack Java-utvikler",
      topic: "",
      description: "Arbeid greier"
    },
    {
      employer: "",
      title: "",
      topic: "",
      description: ""
    },
  ]
}

const certs = {
  objects: [
    {
      employer: "",
      title: "AZ-900 Microsoft Azure Fundamentals",
      topic: "Microsoft Azure",
      description: "sertifisering greier"
    },
    {
      employer: "",
      title: "",
      topic: "",
      description: ""
    },
  ]
}

function CVComponent() {

  // Nav
  const navigate = useNavigate()

  return (
        <div style={{ margin: '20px' }}>
          <button onClick={() => navigate("/")}>Back to lobby</button>
          <CVCompPart>
            <Profile profile={profile} />
          </CVCompPart>
          <CVCompPart title={"Sammendrag av kvalifikasjoner"}>
            <Summary summary={summary} />
          </CVCompPart>
          <CVCompPart title={"Prosjekterfaring"}>
            <MultiBlockCVPart data={projEx} />
          </CVCompPart>
          <CVCompPart title={"Utdannelse"}>
            <MultiBlockCVPart data={education} />
          </CVCompPart>
          <CVCompPart title={"Arbeidserfaring"}>
            <MultiBlockCVPart data={workEx} />
          </CVCompPart>
          <CVCompPart title={"Sertifiseringer"}>
            <MultiBlockCVPart data={certs} />
          </CVCompPart>
        </div>
  )
}

export default CVComponent;