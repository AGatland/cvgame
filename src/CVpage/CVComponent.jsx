import { useNavigate } from 'react-router-dom';
import Profile from './components/profile';
import CVCompPart from './CVCompPart';
import Summary from './components/summary';
import MultiBlockCVPart from './components/multiBlockCVPart';
import profileImage from './assets/profileimage.png'

const profile = {
  name: "Alexander Gatland",
  title: "Fullstack Utvikler",
  profileImg: profileImage,
  details: [
    {field: "TELEFON", data: "+47 48369844"},
    {field: "BOSTED", data: "2001"},
    {field: "FØDT", data: "Trondheim"},
    {field: "EPOST", data: "alexander.gatland@no.experis.com"},
  ],
}

// eslint-disable-next-line no-unused-vars
const summary = {
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

const projEx = {
  objects: [
    {
      employer: "Posten Bring",
      title: "Summer of PAPP",
      topic: "Cloud Infrastructure",
      description: "Under internshipet utviklet konsulenten en web-applikasjon og deployet den i PAPP (Postens applikasjonstjeneste). PAPP eksisterer i et Kubernetes-cluster på Azure og er designet for enkel distribusjon av applikasjoner. Web-applikasjonens hovedfunksjon var å fungere som en bruksanvisning for denne tjenesten. Applikasjonen var en to-do-list hvor brukerne kunne logge inn, legge til og fjerne elementer fra listen sin. Det var også admin-brukere med mulighet til å gjennomgå alle brukernes todolister. Teamet etablerte CI/CD for prosjektet gjennom Azure. Prosjektet involverte også mye Infrastructure as Code (IaC), inkludert Role-Based Access Control (RBAC), oppsett av repositories og tilganger, domenebruk for appen, samt tildeling av en delt PostgreSQL-database i Kubernetes-clusteret ved hjelp av IaC skrevet i Terraform. For autentisering og autorisering i applikasjonen ble Posten Brings Azure Single Sign-On (SSO)-system og OAuth2 brukt. Frontenden til applikasjonen ble utviklet med REACT i TypeScript, mens backenden var skrevet i Java med Spring-rammeverket. Konsulenten deltok i utviklingen sammen med et team på tre, hvor mye av arbeidet ble gjennomført gjennom samkoding, noe som ga bred erfaring med alle aspekter av prosjektet. Under internshipet tok konsulenten rollen som en pådriver i prosjektet. Han initierte og oppmuntret teamet til å fortsette med prosjektet, til tross for begrenset erfaring fra alle i teknologien involvert."
    },
    {
      employer: "NTNU - eVici",
      title: "Bacheloroppgave",
      topic: "Forskning, utdanning og undervisning",
      description: "Konsulenten jobbet i et samarbeidende team på to personer under bacheloroppgaven med klienten eVici. Teamet arbeidet tett med eVici gjennom hele prosjektet, og selv om innholdet av bacheloroppgaven ikke kan deles, involverte arbeidet utvikling av back-end API for en front-end skrevet i JavaScript med Node.js-rammeverket. En annen backend bit for å hente og behandle data, inkludert bilder, fra et annet API utviklet i Python. Frontenden av webapplikasjonen ble utviklet i Angular med typescript, og hele løsningen ble «hostet» på Firebase-plattformen. Teamet benyttet en agil arbeidsmetodikk med kanban-tavle for oppgavestyring, sprinter under intense perioder med tidsfrister som prototype-visning og MVP-levering. De gjennomførte også ukentlige møter sammen med klient for statusoppdateringer og å planlegge framtidig fokus. I prosjektet deltok Alexander i alle partene av utviklingen. Han hadde også rollen som delprosjektleder, hvor han planla prosjektforløpet ved å lage Gantt-diagram over tidsplanen, organiserte møter med både klient og team, og håndterte oppgavefordeling. Han deltok også aktivt i planleggingen av hvilke teknologier og programmeringsspråk som skulle brukes for prosjektet, i samråd med klienten."
    },
    {
      employer: "Boolean UK",
      title: "Bob's Beagles",
      topic: "",
      description: "Under upskill-perioden med Boolean UK arbeidet Alexander sammen med Marit og Nora for å utvikle et e-handelsnettsted for kjæledyrprodukter. Prosjektet ble utført ved hjelp av Java Spring Boot for backenden, med integrasjon av Spring Security ved bruk av JWT for autentisering og Spring JPA Data for databasestyring. Frontenden ble utviklet med React, og Mantine-biblioteker ble benyttet for å bygge et brukervennlig grensesnitt.\n"+
 
      "For databaseløsning benyttet teamet Postgres, og hele applikasjonen ble versjonskontrollert gjennom Git og organisert med GitHub Projects. Utviklingsarbeidet foregikk i egne branches, og kode sammenslåinger til hovedgrenen ble nøye gjennomgått gjennom pull requests og kodegjennomganger for å sikre høy kvalitet og konsistens i koden. En gruppelederrolle, som ble rullert blant teammedlemmene, hadde ansvar for å gjennomgå og merge disse pull requestene.\n"+
       
      "Teamet implementerte også CI/CD-pipelines ved hjelp av GitHub Actions, som automatiserte deployment av både frontend og backend. Disse inkluderte dockerisering av applikasjonens komponenter for sikker og effektiv deployment, med GitHub Secrets for å håndtere sensitive data som databasekoder.\n"+
       
      "Prosjektet er offentlig og kan bli funnet her: https://github.com/users/AGatland/projects/4"
    },
    {
      employer: "NTNU",
      title: "Datamodellering og databasesystemer",
      topic: "Forskning, utdanning og undervisning",
      description: "Konsulenten samarbeidet i en to-personers gruppe for å utvikle en HTTP-basert RESTful API for en ski fabrikk. Prosjektet involverte å lage en løsning på et gitt scenario ved å designe en hensiktsmessig databaseløsning for å håndtere all relevant informasjon og utvikle en API med spesifikke endepunkter. Alexander sin rolle omfattet hovedfokus på utviklingen, selv om han deltok aktivt på alle områder. APIen ble konstruert for å være tilgjengelig fra ulike brukertyper, inkludert ansatte ('employees'), som skulle kunne utføre sine egne oppgaver. Utviklingen av APIen ble gjennomført med Python, der Flask-rammeverket ble benyttet, mens databasen ble satt opp som en MySQL-database ved hjelp av XAMPP. Under prosjektet hadde Alexander som hovedrolle"
    },
    {
      employer: "NTNU",
      title: "Cloud Technologies",
      topic: "Forskning, utdanning og undervisning",
      description: 'Konsulenten utviklet en API som integrerte data fra to separate APIer om Covid-19-tilfeller og tiltak. Målet var å hente spesifikke data fra begge APIene, kombinere dem og lagre resultatet i en egen database. Den resulterende applikasjonen tillot brukeren å få tilgang til informasjon om retningslinjer og smittesituasjonen i forskjellige land. Videre hadde brukeren muligheten til å administrere webhooks, som skulle notifisere den angitte URLen hver gang et spesifikt antall "invocations" ble nådd for et bestemt land. APIen ble implementert ved hjelp av Golang, mens databasen ble satt opp i Firestore.'
    },
  ]
}

const education = {
  objects: [
    {
      employer: "Norges Teknisk-Naturvitenskapelige Universitet (NTNU)",
      title: "Bachelor i Ingeniørfag, Data",
      topic: "",
      description: "Alexander har utført utdanning som dataingeniør. Her har konsulenten hatt stort fokus på programmering, teamarbeid og effektive arbeidsmetodikker. Gjennom studiet har han innhentet kompetanse innen diverse teknologier og områder innen utvikling, deriblant back-end, APIer, cloud, databaser, webutvikling og agile arbeidsmetoder. "
    }
  ]
}

const workEx = {
  objects: [
    {
      employer: "Experis",
      title: "Fullstack Java-utvikler",
      topic: "",
      description: "Jobben startet med tre måneder med akselerert læring innen fullstack Java utvikling som kombinerer teori, casearbeid og sertifiseringsløp. Kurset inkluderer fullstack utvikling med Java, SpringBoot, Postgres, React og Angular. Etter disse tre månendene har konsulenten fokusert på skytjenester og tatt sertifisering i Azure og AWS og jobbet på egne relevante prosjekter innen fullstack utvikling. På slutten av up-skillperioden starter konsulenten sin 12 måneders spesialiseringsperiode hvor han blir utplassert hos en av Experis sine kunder."
    },
    {
      employer: "Posten Bring",
      title: "Summer Intern",
      topic: "",
      description: 'Sommerjobb i Posten Bring sin cloud avdeling. Konsulenten jobbet sammen i en liten gruppe på prosjektet "Summer of PAPP" og presenterte i slutten av perioden det utviklede produktet for Posten Bring.'
    }
  ]
}

const certs = {
  objects: [
    {
      employer: "",
      title: "AZ-900 Microsoft Azure Fundamentals",
      topic: "Microsoft Azure",
      description: "AZ-900 Microsoft Azure Fundamentals-sertifiseringen er en anerkjennelse av essensiell kunnskap om Azure-skyen. Den validerer kompetanse innen grunnleggende skytjenester, ressursadministrasjon og prising i Azure. Sertifiseringen gir et fundament for å utvikle praktiske ferdigheter og legger grunnlaget for å utforske Azure-plattformen ytterligere."
    },
    {
      employer: "",
      title: "AWS Certified Cloud Practitioner",
      topic: "Amazon Web Services (AWS)",
      description: "AWS Certified Cloud Practitioner-sertifiseringen bekrefter grunnleggende kunnskap om AWS og skycomputing. Den demonstrerer forståelse av grunnleggende skykonsepter, inkludert skytjenester, prising og sikkerhet i AWS. Sertifiseringen gir et fundament for å utforske og anvende AWS-teknologier med et fokus på praktisk innsikt."
    },
  ]
}

const courses = {
  objects: [
    {
      employer: "",
      title: "Experis Academy",
      topic: "Experis",
      description: "Tre måneder med akselerert læring innen fullstack Java utvikling. Kurset vil inkludere fullstack utvikling med Java, SpringBoot, Postgres, React og Angular."
    },
  ]
}


function CVComponent() {

  // Nav
  const navigate = useNavigate()

  return (
        <div style={{ margin: '20px' }}>
          <button onClick={() => navigate("/")}>Back to lobby</button>
          <CVCompPart lineColor={""}>
            <Profile profile={profile} />
          </CVCompPart>
          <CVCompPart title={"Sammendrag av kvalifikasjoner"} lineColor={"#8dd3c7"}>
            <Summary summary={summary} color={"#8dd3c7"} />
          </CVCompPart>
          <CVCompPart title={"Prosjekterfaring"} lineColor={"#ffed6f"}>
            <MultiBlockCVPart data={projEx} />
          </CVCompPart>
          <CVCompPart title={"Utdannelse"} lineColor={"#ffed6f"}>
            <MultiBlockCVPart data={education} />
          </CVCompPart>
          <CVCompPart title={"Arbeidserfaring"} lineColor={"#80b1d3"}>
            <MultiBlockCVPart data={workEx} />
          </CVCompPart>
          <CVCompPart title={"Sertifiseringer"} lineColor={"#fdb462"}>
            <MultiBlockCVPart data={certs} />
          </CVCompPart>
          <CVCompPart title={"Kurs"} lineColor={"#b3de69"}>
            <MultiBlockCVPart data={courses} />
          </CVCompPart>
        </div>
  )
}

export default CVComponent;