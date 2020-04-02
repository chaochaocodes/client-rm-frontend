import React, {Fragment} from 'react'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import 'typeface-roboto';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    },
  paper: {
    maxWidth: 800,
    overflow: 'hidden',
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(4), 
    opacity: 0.7,
  },
}));

const team = () => {
  return(
    <Grid item xs>
      <Typography variant="h6">Select Your Real Estate Broker</Typography>
        <Box letterSpacing={1} m={2}>
        Real estate professionals can help you find the type of home you seek, examine comparable properties and are equipped with specific knowledge of the neighborhoods you are considering to assist your decision making. There is a reason that the top 10% of real estate brokers handle approximately 90% of all sales so it is important you select the best broker possible. </Box>
        <Typography variant="h6">Select Your Real Estate Attorney</Typography>        
        <Box letterSpacing={1} m={2}>
        Your legal representative will guide you through the home purchase process with a fiduciary duty only to you. A home purchase is typically a family’s largest financial commitment and an experienced real estate lawyer will protect all of your interests. Lawyers concentrating in residential real property law that are familiar with local market conditions will avoid “over negotiating” the transaction that would preclude a successful purchase while still securing the best outcome possible on your behalf.</Box>
        <Typography variant="h6">Select Your Mortgage Lender</Typography>  
        <Box letterSpacing={1} m={2}>      
        Speak with loan officers with a reputation for delivering the loan product that best fits your situation. Beyond just the interest rate, a trusted loan officer will assist you in selecting the best mortgage product at the lowest possible cost with the ability to close when you desire. </Box>
    </Grid>
)};

const contract = () => {
  return(
    <Grid item xs>
      <Typography variant="h6">Real Estate Contract</Typography>
        <Box letterSpacing={1} m={2}>
        Protocols established between local bar associations and real estate broker organizations preclude lawyers from re-negotiating the purchase price which will be noted on the contract form(s) going back and forth between the home purchasers and seller until mutual agreement is reached. Upon consensus, the contract is typically delivered to the respective lawyers for a close review to ascertain that the terms best align with the client’s desires concerning the myriad of issues contained in the contract.</Box>
        <Typography variant="h6">Contract Contingencies</Typography>        
        <Box letterSpacing={1} m={2}>
        Any other conditions to closing that are specified in the real estate contract need to be identified with a projected date for resolution to avoid jeopardizing the final closing date.
        </Box>
        <Typography variant="h6">Consumer Disclosures</Typography>  
        <Box letterSpacing={1} m={2}>      
        Additional disclosures include those by the lender specifying loan expenses and any title service providers with an Affiliated Business Disclosure. If the property is a condominium, additional disclosures include the §22.1 Disclosure and the Condominium Declaration and By-Laws. For non-condominium properties a Land Survey will disclose any boundary line and related issues.</Box>
    </Grid>
)};

const mortgage = () => {
  return(
    <Grid item xs>
      <Typography variant="h6">Application</Typography>
        <Box letterSpacing={1} m={2}>
        <a href="https://s3.amazonaws.com/TycV2_Production/Attachments/95920f5a-4c23-47d6-9a7b-62f16ed83d5f/Loan%20application.pdf?AWSAccessKeyId=AKIAJTFD7ASHQQYOQJWQ&Expires=2051215200&Signature=N19soc9EvABeXhDl43Pf%2Fyf88So%3D">See Example Here</a>
        </Box>
        <Typography variant="h6">Underwriting</Typography>        
        <Box letterSpacing={1} m={2}>
        Depending on the type of loan selected (i.e. Conventional, FHA, VA etc.) the lender will process the loan application with the applicant’s credit score and verification of income and employment.
        </Box>
        <Typography variant="h6">Appraisal</Typography>  
        <Box letterSpacing={1} m={2}>      
        Comparable home sales in the neighborhood will be looked at to establish the fair market value.
        <br/><a href="https://s3.amazonaws.com/TycV2_Production/Attachments/f257359d-2188-4321-a56a-ba170636ee84/Appraisal.pdf?AWSAccessKeyId=AKIAJTFD7ASHQQYOQJWQ&Expires=2051215200&Signature=NTqqf3JcUP6hLUyFSLQFX9rYX34%3D">See Example Here</a>
        </Box>
        <Typography variant="h6">Approval</Typography>  
        <Box letterSpacing={1} m={2}>      
        Approval of the loan will be made in writing along with any conditions that may apply.
        </Box>
    </Grid>
)};

const inspections = () => {
  return(
    <Grid item xs>
      <Typography variant="h6">Title Commitment</Typography>
        <Box letterSpacing={1} m={2}>
        The home seller, under widely used real estate contracts, has the responsibility to deliver and pay for your owner’s title policy in Illinois.
        </Box>
        <Typography variant="h6">Home Inspection</Typography>        
        <Box letterSpacing={1} m={2}>
        <p> As the purchaser you can attend the Home Inspection with your real estate agent and ask any questions about the property. The purpose of the inspection is to familiarize yourself with the home, its systems and components. Other inspections you may want are for pest, well/septic and radon, where applicable. </p>
        <p> The common refrain is “no home is perfect” but more importantly, any problems discovered by the inspection must be “lived with” unless the contract language has provisions to the contrary. The lawyers will follow that contract language in determining which property condition issues are eligible for monetary relief. </p>
        <p> Any home inspection issues that emerge will be dealt with in accordance to the terms of the real estate contract. Additionally, some municipalities require a pre-closing zoning type inspection. </p>
        </Box>
        <Typography variant="h6">Land Survey</Typography>  
        <Box letterSpacing={1} m={2}>      
        The land survey will disclose any improvements that are over lot lines, easements or building set back lines and resolve them to the lenders and buyer’s satisfaction on the title commitment.
        </Box>
    </Grid>
)};

const closing = () => {
  return(
    <Grid item xs>
      <Typography variant="h6">Final Walk Through</Typography>
        <Box letterSpacing={1} m={2}>
        <p> Most contracts allow purchasers to do a final inspection typically days before the closing. However, care must be taken by the lawyers in addressing any last minute issues as they may impact the mortgage disclosures which in turn can cause an unintended delay when they involve monetary credits between the home seller and purchaser. Experienced real estate attorneys know how to resolve any walk thru issues while keeping the closing on track. </p>
        <p> Schedule the walkthrough via your attorney or broker. The walkthrough will confirm that the home is in the approximate condition as when the purchase was made. </p>
        </Box>
        <Typography variant="h6">Closing</Typography>        
        <Box letterSpacing={1} m={2}>
        <p><strong>Scheduling the Closing</strong></p>
        <p>It is important that this specific time be agreed to as far in advance as possible as it triggers the sending of required lender disclosures and alerts all service providers to finish the requisite tasks in advance of a certain date.</p>
        <p> Everything leads up to this moment when title is actually transferred to the purchasers (or their designees) and the mortgage is funded becoming a first lien on the real estate. The buyer and seller sign final documents in advance or during the closing. Typically, under the terms of most real estate contracts, it is too late to make new demands or re-open negotiations over the status of personal property items or possession dates, but that does not always prevent some parties from trying which is another reason to have an experienced legal counsel.</p>
        <p><strong>Post-Closing </strong></p>
        <p> The title and escrow company will likely post a copy of all your important documents for your future reference and archival. Additionally, you will likely be issued an owner title policy shortly after closing. This document, which protects your ownership interest in the property, can be referenced online at any time. </p>
        <p><strong>Loan and Closing Documents</strong></p>
        <p>Any of the previously listed documents needed to close will emerge in this period that is typically 5-10 days before closing. Additionally, your attorney will be reviewing the loan disclosure and closing documents to ascertain that you pay only those charges that you are responsible for under the terms of the real estate contact.
        Click here to view samples for title and loan closing documents:</p>
        </Box>
        <Typography variant="h6">Post-Closing</Typography>  
        <Box letterSpacing={1} m={2}>      
        Comparable home sales in the neighborhood will be looked at to establish the fair market value.
        <br/><a href="https://s3.amazonaws.com/TycV2_Production/Attachments/f257359d-2188-4321-a56a-ba170636ee84/Appraisal.pdf?AWSAccessKeyId=AKIAJTFD7ASHQQYOQJWQ&Expires=2051215200&Signature=NTqqf3JcUP6hLUyFSLQFX9rYX34%3D">See Example Here</a>
        </Box>
    </Grid>
)};

export const tracker = {
  team,
  contract,
  mortgage,
  inspections,
  closing
};


// const Privacy = () => {
//     const classes = useStyles();
//     return(
//         <Fragment>
//             <div className={classes.root}>
//                 <Paper className={classes.paper}>
//                   <Grid container wrap="nowrap" spacing={2}>
//                     <Grid item xs>
//                         <Typography variant="h5">5 Steps to Home Buying</Typography><hr></hr>
//                         <p>
//                           <Typography variant="h6">1.	Get Pre-Approved</Typography>
//                           <Box letterSpacing={1.5} m={3}>
//                           It’s important to know how much home you can afford, what type of down payment to budget for, monthly mortgage payment as well as what type of loan program you’ll use to finance the new property.
//                           <p>A personal consultation with a trusted mortgage professional should address all your initial loan approval questions, as well as uncover any potential challenges that can complicate the entire transaction. Certain mortgage loans have residence type, HOA, appraisal or insurance restrictions that your agent needs to be aware of before showing you listings.</p>
//                           </Box>
//                         </p>
//                         <p>
//                           <Typography variant="h6">2.	Assemble your Team</Typography>
//                           <Box letterSpacing={1.5} m={3}>
//                           The home buying process has multiple steps, participating parties and potential challenges that can be overcome with the right team on your side. Your agent, appraiser, title company, home inspector, insurance agent and lender all have important roles to play. Buying a new home is literally a team sport since there are so many tasks, important timelines, documents and responsibilities that need attention.

// Besides working with a professional team that you trust, it’s also important that the individual players have the ability to effectively communicate and execute on important decisions together.                          </Box>
//                         </p>
//                         <p>
//                           <Typography variant="h6">3.	Purchase Offer</Typography>
//                           <Box letterSpacing={1.5} m={3}>
//                           Assuming that you’ve already received a mortgage pre-approval and have a good understanding of the type of property you are qualified to purchase, your agent will submit your purchase offer to a listing agent or seller.

// Once you receive an accepted offer, the due-diligence period starts a series of timelines for final mortgage approval, appraisal, inspections and other requirements which would be stated in the terms of the contract.                          </Box>
//                         </p>
//                         <p>
//                           <Typography variant="h6">4.	Under Contract</Typography>
//                           <Box letterSpacing={1.5} m={3}>
//                           It comes in from all angles at this point – lenders, processors, insurance agents, sellers, real estate agents and you.                          </Box>
//                         </p>
//                         <p>
//                           <Typography variant="h6">5.	Closing and Keys!</Typography>
//                           <Box letterSpacing={1.5} m={3}>
//                           A successful closing requires all of the team players to come together at the same time, with the same agenda, on the same date…. with numbers and figures that match. Once a transaction has closed successfully, you are the proud owner of your new home.                          </Box>
//                         </p><br></br>
//                     </Grid>
//                   </Grid>
//                 </Paper>
//             </div>
//         </Fragment>
//     )
// }

