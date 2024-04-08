import CoolCompanies from "../components/cool_companies";
import MainSection from "../components/main_section";
import NavBar from "../components/navbar";
import ScheduleMeetingModal from "../components/schedule_meeting_modal";
import { useState } from "react";


export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <NavBar openModal={openModal} />
            <MainSection />
            <CoolCompanies/>
            {isModalOpen && <ScheduleMeetingModal closeModal={closeModal} />}

        </>
    );
}