import Tab from "@mui/material/Tab";
import "./App.css";
import { EncryptView } from "./Encrypt";
import { useState } from "react";
import { DecryptView } from "./Decrypt";
import { Box, Tabs } from "@mui/material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box display={value === index ? "block" : "none"} sx={{ p: 3 }}>
        {children}
      </Box>
    </div>
  );
}

function App() {
  const [tab, setTab] = useState(0);
  return (
    <div className="grid place-items-center w-full h-screen bg-gradient-to-tr from-stone-600 to-stone-700">
      <div className="bg-white p-4 rounded-md w-full md:max-w-md">
        <Tabs onChange={(_e, v) => setTab(v)} value={tab}>
          <Tab value={0} label="Encriptar"></Tab>
          <Tab value={1} label="Desencriptar"></Tab>
        </Tabs>
        <CustomTabPanel index={0} value={tab}>
          <EncryptView />
        </CustomTabPanel>
        <CustomTabPanel index={1} value={tab}>
          <DecryptView />
        </CustomTabPanel>
      </div>
    </div>
  );
}

export default App;
