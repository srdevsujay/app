import {useContext, useEffect, useState} from "react";
import {DateRangePicker} from "react-date-range";
import {addDays} from "date-fns";
import {Modal} from "../../../../components/modal";
import {
    ButtonFilterCalendar,
    ButtonTitlePicker,
    RdrDefinedRangesWrapper2,
} from "../../../Dashboard/styled-components/dashboardStyled";
import {ButtonsModal} from "../../../../styled-components/button/index";
import calendar from "../../../../assets/images/calendar.svg";
import calendarDark from "../../../../assets/images/calendarDark.svg";
import {ThemeContext} from "../../../../utilities/theme/ThemeContext";
import {useSelector} from "react-redux";


const FilterContacts = ({
                            titleDatePickerLeads,
                            dataLead,
                            isModalOpenFilter,
                            setModalStateFilter,
                            toggleModalFilter,
                            currentCalendar,
                            setCurrentCalendar,
                            minDate,
                            maxDate,
                            handleDateFilterCalendar,
                            setHandleButtonsFilterCalendar,
                        }: any) => {

    const themeLocalStorage: any = localStorage.getItem("Theme");

    const themeState = JSON.parse(themeLocalStorage);
    const {theme, themeFilterFunnel} = useContext(ThemeContext);

    const handleOpen = (e: any) => {
        e.stopPropagation();
        setModalStateFilter(true);
    };

    const [dataInRange, setDataInRange] = useState([]);
    //console.log('dataInRange', dataInRange)


    const handleSevenDay = () => {
        const currentDate = new Date();
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(currentDate.getDate() - 7);

        const filteredData = dataLead.filter((item: any) => {
            const itemDate = new Date(
                item.joined || item.appoiment_date || item.date
            );
            return itemDate >= sevenDaysAgo && itemDate <= currentDate;
        });

        setDataInRange(filteredData);
        setHandleButtonsFilterCalendar(filteredData);
    };

    const handleFourteenDays = () => {
        const currentDate = new Date();
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(currentDate.getDate() - 14);

        const filteredData = dataLead.filter((item: any) => {
            const itemDate = new Date(
                item.joined || item.appoiment_date || item.date
            );
            return itemDate >= sevenDaysAgo && itemDate <= currentDate;
        });

        setDataInRange(filteredData);
        setHandleButtonsFilterCalendar(filteredData);
    };

    const handleThirtyDays = () => {
        const currentDate = new Date();
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(currentDate.getDate() - 30);
        //console.log("sevenDaysAgo", sevenDaysAgo);

        const filteredData = dataLead.filter((item: any) => {
            const itemDate = new Date(
                item.joined || item.appoiment_date || item.date
            );
            return itemDate >= sevenDaysAgo && itemDate <= currentDate;
        });

        setDataInRange(filteredData);
        setHandleButtonsFilterCalendar(filteredData);
    };

    const handleYesterday = () => {
        const currentDate = new Date();

        // Crear una nueva fecha para representar el día de "ayer"
        const yesterday = new Date();
        yesterday.setDate(currentDate.getDate() - 1);
        const yesterdayDateString = yesterday.toLocaleDateString();
        //console.log("yesterdayDateString", yesterdayDateString);

        // Filtrar los datos que coinciden con la fecha de "ayer"
        const filteredData = dataLead.filter((item: any) => {
            const itemDate = new Date(
                item.joined || item.appoiment_date || item.date
            );
            const itemDateString = itemDate.toLocaleDateString();
            //console.log("itemDateString", itemDateString);

            return itemDateString == yesterdayDateString;
        });

        setDataInRange(filteredData);
        setHandleButtonsFilterCalendar(filteredData);
    };

    const handleToday = () => {
        const currentDate = new Date();

        // Convertir la fecha de hoy a representación de texto sin hora específica
        const currentDateString = currentDate.toLocaleDateString();

        // Filtrar los datos que coinciden con la fecha de "hoy"
        const filteredData = dataLead.filter((item: any) => {
            const itemDate = new Date(
                item.joined || item.appoiment_date || item.date
            );
            const itemDateString = itemDate.toLocaleDateString();
            return itemDateString === currentDateString;
        });

        setDataInRange(filteredData);
        setHandleButtonsFilterCalendar(filteredData);
    };

    const handleCurrentWeek = () => {
        const currentDate = new Date();

        // Obtener el día actual de la semana (0: Domingo, 1: Lunes, ..., 6: Sábado)
        const currentDayOfWeek = currentDate.getDay();

        // Calcular el número de días de desplazamiento para retroceder al día lunes
        const daysToMonday = currentDayOfWeek === 0 ? 6 : currentDayOfWeek - 1;

        // Crear una nueva fecha representando el día lunes de la semana actual
        const monday = new Date(currentDate);
        monday.setDate(currentDate.getDate() - daysToMonday);
        monday.setHours(0, 0, 0, 0);

        // Crear una nueva fecha representando el día miércoles de la semana actual
        const wednesday = new Date(currentDate);
        wednesday.setDate(currentDate.getDate() - daysToMonday + 2);
        wednesday.setHours(23, 59, 59, 999);

        // Filtrar los datos que caen dentro del rango de fechas de la semana actual
        const filteredData = dataLead.filter((item: any) => {
            const itemDate = new Date(
                item.joined || item.appoiment_date || item.date
            );
            return itemDate >= monday && itemDate <= wednesday;
        });

        setDataInRange(filteredData);
        setHandleButtonsFilterCalendar(filteredData);
    };

    const handleLastWeek = () => {
        const currentDate = new Date();

        // Obtener el día actual de la semana (0: Domingo, 1: Lunes, ..., 6: Sábado)
        const currentDayOfWeek = currentDate.getDay();

        // Calcular el número de días de desplazamiento para retroceder al día lunes de la semana actual
        const daysToMonday = currentDayOfWeek === 0 ? 6 : currentDayOfWeek - 1;

        // Crear una nueva fecha representando el día lunes de la semana actual
        const mondayThisWeek = new Date(currentDate);
        mondayThisWeek.setDate(currentDate.getDate() - daysToMonday);
        mondayThisWeek.setHours(0, 0, 0, 0);

        // Retroceder una semana para obtener la fecha del lunes de la semana pasada
        const mondayLastWeek = new Date(mondayThisWeek);
        mondayLastWeek.setDate(mondayThisWeek.getDate() - 7);
        mondayLastWeek.setHours(0, 0, 0, 0);

        // Crear una nueva fecha representando el día domingo de la semana pasada
        const sundayLastWeek = new Date(mondayLastWeek);
        sundayLastWeek.setDate(mondayLastWeek.getDate() + 6);
        sundayLastWeek.setHours(10, 59, 59, 999);

        // Filtrar los datos que caen dentro del rango de fechas de la semana pasada
        const filteredData = dataLead.filter((item: any) => {
            const itemDate = new Date(
                item.joined || item.appoiment_date || item.date
            );
            return itemDate >= mondayLastWeek && itemDate <= sundayLastWeek;
        });

        setDataInRange(filteredData);
        setHandleButtonsFilterCalendar(filteredData);
    };

    const handleCurrentMonth = () => {
        const currentDate = new Date();

        // Obtener el primer día del mes actual
        const firstDayOfMonth = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            1
        );
        firstDayOfMonth.setHours(0, 0, 0, 0);

        // Obtener el último día del mes (día actual)
        const lastDayOfMonth = new Date(currentDate);
        lastDayOfMonth.setHours(23, 59, 59, 999);

        // Filtrar los datos que caen dentro del rango del mes actual hasta el día actual
        const filteredData = dataLead.filter((item: any) => {
            const itemDate = new Date(
                item.joined || item.appoiment_date || item.date
            );
            return itemDate >= firstDayOfMonth && itemDate <= lastDayOfMonth;
        });

        setDataInRange(filteredData);
        setHandleButtonsFilterCalendar(filteredData);
    };

    return (
        <div className="">
            {/* <div>
        <h2>Total de Lead: {totalLeads}</h2>
        <h2>Total de Payments: {totalPayments}</h2>
        <h2>Total de Refund: {totalRefund}</h2>
      </div> */}
            <ButtonTitlePicker
                className="btn mr-2"
                onClick={handleOpen}
                theme={theme}
            >
                <span className="btn-calendar-title">{titleDatePickerLeads}</span>
                <img
                    src={themeState === true ? calendarDark : calendar}
                    alt={titleDatePickerLeads}
                    className=""
                />
            </ButtonTitlePicker>
            <Modal
                title={""}
                isOpen={isModalOpenFilter}
                onClose={toggleModalFilter}
                width="70vw"
                padding="10px"
                btnClose={0}
            >
                <div className="d-flex">
                    <div className="rdrDateRangePickerWrapper">
                        <RdrDefinedRangesWrapper2 theme={theme}>
                            <div className="rdrStaticRanges">
                                <ButtonFilterCalendar
                                    className="rdrStaticRangeLabel"
                                    onClick={handleSevenDay}
                                    theme={theme}
                                >
                                    7 Días
                                </ButtonFilterCalendar>
                                <ButtonFilterCalendar
                                    className="rdrStaticRangeLabel"
                                    onClick={handleFourteenDays}
                                    theme={theme}
                                >
                                    14 Días
                                </ButtonFilterCalendar>
                                <ButtonFilterCalendar
                                    className="rdrStaticRangeLabel"
                                    onClick={handleThirtyDays}
                                    theme={theme}
                                >
                                    30 Días
                                </ButtonFilterCalendar>
                                {/* <button
                  className="rdrStaticRange rdrStaticRangeLabel"
                  // onClick={handleThreeMonth}
                >
                  3 Meses
                </button> */}
                                <ButtonFilterCalendar
                                    className="rdrStaticRangeLabel"
                                    onClick={handleYesterday}
                                    theme={theme}
                                >
                                    Ayer
                                </ButtonFilterCalendar>
                                <ButtonFilterCalendar
                                    className="rdrStaticRangeLabel"
                                    onClick={handleToday}
                                    theme={theme}
                                >
                                    Hoy
                                </ButtonFilterCalendar>
                                <ButtonFilterCalendar
                                    className="rdrStaticRangeLabel"
                                    onClick={handleCurrentWeek}
                                    theme={theme}
                                >
                                    Semana Actual
                                </ButtonFilterCalendar>
                                <ButtonFilterCalendar
                                    className="rdrStaticRangeLabel"
                                    onClick={handleLastWeek}
                                    theme={theme}
                                >
                                    Semana Pasada
                                </ButtonFilterCalendar>
                                <ButtonFilterCalendar
                                    className="rdrStaticRangeLabel"
                                    onClick={handleCurrentMonth}
                                    theme={theme}
                                >
                                    Mes Actual
                                </ButtonFilterCalendar>
                            </div>
                        </RdrDefinedRangesWrapper2>
                    </div>
                    <DateRangePicker
                        onChange={(item) => setCurrentCalendar([item.selection])}
                        // showSelectionPreview={true}
                        moveRangeOnFirstSelection={false}
                        months={2}
                        ranges={currentCalendar}
                        direction="horizontal"
                        className={
                            themeState === true || themeState === "true"
                                ? "DateRangePickerTheme"
                                : ""
                        }
                        minDate={minDate}
                        maxDate={maxDate}
                    />
                </div>
                <div className="row">
                    <div className="offset-4 form-group col-sm-2">
                        <ButtonsModal
                            className="btn btn-close"
                            onClick={toggleModalFilter}
                            theme={themeFilterFunnel}
                        >
                            Cerrar
                        </ButtonsModal>
                    </div>
                    <div className="form-group col-sm-2">
                        <ButtonsModal
                            className="btn btn-add"
                            type="submit"
                            onClick={handleDateFilterCalendar}
                        >
                            Filtrar
                        </ButtonsModal>
                    </div>
                </div>
            </Modal>
        </div>
    );
};
export default FilterContacts;
