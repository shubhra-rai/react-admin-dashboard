import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails"
import { tokens } from "../../theme";
import { GridExpandMoreIcon } from "@mui/x-data-grid";

const FAQ = () => {
   const theme= useTheme();
   const colors = tokens(theme.palette.mode);

   return (
    <Box m="20px" >
        <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<GridExpandMoreIcon />}>
                <Typography color={colors.GreenAccent[500]} variant="h5">
                    An Important Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography >
                    MAHAKAAL MERI JAAN
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<GridExpandMoreIcon />}>
                <Typography color={colors.GreenAccent[500]} variant="h5">
                    Your Favourite Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography >
                    OM Namah Shivay
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<GridExpandMoreIcon />}>
                <Typography color={colors.GreenAccent[500]} variant="h5">
                    Some Random Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography >
                    MAHAKAAL MERI JAAN
                </Typography>
            </AccordionDetails>
        </Accordion>


        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<GridExpandMoreIcon />}>
                <Typography color={colors.GreenAccent[500]} variant="h5">
                    The Final Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography >
                    MAHAKAAL MERI JAAN
                </Typography>
            </AccordionDetails>
        </Accordion>





    </Box>
   );
};

export default FAQ;