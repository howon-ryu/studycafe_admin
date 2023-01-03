/** @jsxImportSource @emotion/react */
import moment from "moment";
import { css } from "@emotion/react";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { BrowserRouter, useSearchParams } from "react-router-dom";

import FullCalendar, {
  DateSelectArg,
  EventClickArg,
  EventContentArg,
  EventApi,
  EventAddArg,
  EventChangeArg,
  EventRemoveArg,
} from "@fullcalendar/react";
import Modal from "./Modal";
import Modal_view from "./Modal_view";
import styled from "styled-components";

import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import { Calendar, CalendarApi } from "@fullcalendar/core";
import interactionPlugin, {
  DateClickArg,
  EventDragStartArg,
  EventDragStopArg,
} from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import momentPlugin from "@fullcalendar/moment";
import {
  getStudyPlanList,
  postStudyPlanList,
} from "../remote/student/getStudyPlanList";
import { format } from "date-fns";
//import './main.css';

let id = 0;
const START_DATE = "1970-01-01";
const END_DATE = format(new Date("2030-12-31"), "yyyy-MM-dd");
console.log("END_DATE", END_DATE);

const Calendar_plan = (props) => {
  console.log("props!!");
  const [isOpenModal, setOpenModal] = React.useState(false);
  const [isOpenModal_view, setOpenModal_view] = React.useState(false);
  const [studentPlanList, setStudentPlanList] = React.useState([]);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  let [nname, setnname] = useState("");

  const [searchParams] = useSearchParams();
  let studentId = searchParams.get("student");
  // const studentId = props.detail_num;
  useEffect(() => {
    if (studentId == null) {
      console.log("student ID", studentId);
      console.log("props.detail_num", props.detail_num);
      studentId = props.detail_num;
    }
  }, []);
  console.log("student ID", studentId);
  const onClickToggleModal = React.useCallback(() => {
    // let aa = $("#card__right");
    // console.log("aa:",aa);
    // if(isOpenModal==false){
    //   aa.css({"z-index":"-1"});
    // }
    // else{
    //   aa.css({"z-index":"6000"});
    // }

    setOpenModal(!isOpenModal);
    console.log("iso", isOpenModal);

    console.log(flag);
    flag = 0;
    console.log("nname", nname);
    console.log(flag);
  }, [isOpenModal]);

  const fetchStudentPlanList = useCallback(async () => {
    console.log("click");
    if (studentId) {
      const data = await getStudyPlanList({
        studentId,
        fromDate: START_DATE,
        toDate: END_DATE,
      });
      console.log("data:", data);
      const calendarFormatPlanList = data.map((item) => {
        const parsedDate = (ISOString) => ISOString.substring(0, 10);

        return {
          start: parsedDate(item.startTime),
          end: parsedDate(item.endTime),
          title: item.title,
          description: item.description,
          id: item.id,
        };
      });
      setStudentPlanList([...calendarFormatPlanList]);
      console.log("플랜 목록: ", data);
    }
  }, [studentId, setStudentPlanList]);

  useEffect(() => {
    fetchStudentPlanList();
  }, [startDate, endDate, fetchStudentPlanList]);

  const onClickToggleModal_view = React.useCallback(() => {
    // let aa = $("#card__right");
    // console.log("aa:",aa);
    // if(isOpenModal==false){
    //   aa.css({"z-index":"-1"});
    // }
    // else{
    //   aa.css({"z-index":"6000"});
    // }

    setOpenModal_view(!isOpenModal_view);
    console.log(isOpenModal_view);
  }, [isOpenModal_view]);
  const [events, setEvents] = React.useState([]);

  let detail_num;
  React.useEffect(() => {
    console.log("eventler", events);
  }, [events]);
  console.log("props", props);
  // setdetailnum(props.detail_num);
  detail_num = props.detail_num;
  const handleEvents = (events) => {
    setEvents(events);
  };
  const renderEventContent = (eventContent) => {
    return (
      <>
        <b>Time Text: {eventContent.timeText}</b>
        <b style={{ color: "red" }}> {eventContent.event.title}</b>
      </>
    );
  };
  // 예정된 일정에 대한 클릭시 event!
  const handleEventClick = (clickInfo) => {
    //alert(`click event! ${clickInfo.event.title}`)
    let title_textt = clickInfo.event.title;
    let description_text = clickInfo.event._def.extendedProps.description;
    let start_time_text_prev = clickInfo.event.start;
    let end_time_text_prev = clickInfo.event.end;
    let location_text = clickInfo.event._def.extendedProps.location;
    let start_time_text = moment(start_time_text_prev).format("YYYY-MM-DD");
    let end_time_text = moment(end_time_text_prev).format("YYYY-MM-DD");
    settitle(title_textt);
    setdescription(description_text);
    setstart(start_time_text);
    setend(end_time_text);
    setlocation(location_text);
    console.log("이벤트: ", clickInfo.event);
    console.log(clickInfo.event._def.extendedProps.location);
    console.log(clickInfo.event.start);
    console.log(clickInfo.event.end);
    onClickToggleModal_view();
    // clickInfo.event.remove()
  };
  let [title_text, settitle] = useState("");
  let [description_text, setdescription] = useState("");
  let [start_time_text, setstart] = useState(Date);
  let [end_time_text, setend] = useState(Date);
  let [locaion_text, setlocation] = useState("");

  let flag = 1;
  const handleDateSelect = (selectInfo) => {
    console.log("tt");
    let calenderApi = selectInfo.view.calendar;
    calenderApi.unselect();
    console.log("abd:", calenderApi);
    console.log(nname);
    // if(title){
    //   console.log("asdf")
    //   // calenderApi.addEvent({
    //   //   id:String(id++),
    //   //   title,
    //   //   start:selectInfo.startStr,
    //   //   end:selectInfo.endStr,
    //   //   allDay:selectInfo.allDay
    //   // })
    // }
    // const C = document.getElementById("kt_modal_add_event") as HTMLDivElement;
    // var f;
    // f = C.querySelector("#kt_modal_add_event_form")
    // console.log(f);
    // let popup = window.open('../../modules/learning/Modal',"",'width=800,height=600');
    //f.render();
    //
    if (flag == 1) {
      onClickToggleModal();
    } else {
      console.log("nname", nname);
    }
  };

  const handleEventDrag = (event) => {
    console.log("드래그 이벤트", event.event);
  };

  const handleSubmit = (selectInfo) => {
    selectInfo.preventDefault();
    console.log(selectInfo);
    let calenderApi = selectInfo;
    // calenderApi.unselect()
    let event_name = document.getElementById("event_name").value;
    // console.log("event_name:",event_name);
    let event_descripton = document.getElementById("event_description").value;
    // console.log("event_descripton:",event_descripton);
    let event_location = document.getElementById("event_location").value;
    let event_start_date = document.getElementById(
      "kt_calendar_datepicker_start_date"
    ).value;
    // console.log("event_start_date:",event_start_date);
    // let event_start_time =(document.getElementById("kt_calendar_datepicker_start_time") as HTMLInputElement).value;
    let event_end_date = document.getElementById(
      "kt_calendar_datepicker_end_date"
    ).value;
    // let event_end_time =(document.getElementById("kt_calendar_datepicker_end_time") as HTMLInputElement).value;
    // let event_allday =(document.getElementById("kt_calendar_datepicker_allday") as HTMLInputElement).value;
    setnname(event_name);

    console.log("gg", nname);
    console.log("ggg", studentId);
    postStudyPlanList({
      studentId,
      fromTime: event_start_date,
      toTime: event_end_date,
      title: event_name,
      description: event_descripton,
      place: event_location,
    });
    setOpenModal(!isOpenModal);
    //return(handleDateSelect);

    //console.log("ev:",nname);
    // if(event_name){

    //   Calender.addEvent({
    //     id:String(id++),

    //     title: event_name,
    //     start:event_start_time,
    //     end:event_end_time,
    //     allDay:event_allday,
    //     description: event_descripton,
    //     location: event_location
    //   })

    // }
  };

  return (
    <div
      className="col-xl-12 col-xxl-8 mb-5 mb-xl-10 card__right_wrap"
      css={css`
        flex: 1;
        max-width: 60%;
        margin-left: 40px;
        z-index: 5000;
      `}
    >
      <div id="kt_app_content" className="app-content flex-column-fluid">
        <div id="kt_app_content_container">
          <div
            className="card card-flush h-xl-100 card__right"
            css={
              !isOpenModal && !isOpenModal_view
                ? css`
                    z-index: 5000;
                  `
                : css`
                    z-index: -1;
                  `
            }
          >
            <div className="card-body">
              <br />
              {/* <div id="kt_calendar_app"></div> */}
              <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                headerToolbar={{
                  left: "prev,next,today",
                  center: "title",
                  right: "dayGridMonth, timeGridWeek,timeGridDay",
                }}
                locale="ko"
                // 날짜 클릭
                dateClick={(e) => {
                  console.log("dateclick", e);
                }}
                events={studentPlanList}
                eventDragStop={handleEventDrag}
                eventClick={handleEventClick}
                // 예정에 대한 옵션
                // eventContent = {renderEventContent}
                eventsSet={handleEvents}
                eventAdd={(e) => {
                  console.log("event add", e);
                }}
                eventChange={(e) => {
                  console.log("event change", e);
                }}
                initialView="dayGridMonth"
                selectable={true}
                editable={true}
                eventDragStart={(e) => {
                  console.log("eventdragstart");
                }}
                eventDragStop={(e) => {
                  console.log("eventdragstop");
                }}
                // eventBackgroundColor={"blue"}
                // eventBorderColor={"purple"}
                eventRemove={(e) => {
                  console.log("evebt remove");
                }}
                select={handleDateSelect}
                buttonText={{
                  day: "일",
                  month: "월",
                  week: "주",
                  today: "오늘",
                }}
              />
            </div>
          </div>

          <Main>
            {isOpenModal && (
              <Modal onClickToggleModal={onClickToggleModal}>
                <div className="modal-content">
                  <form onSubmit={handleSubmit} className="w-100">
                    <div className="modal-header">
                      <h2 className="fw-bold" data-kt-calendar="title">
                        학습 계획 추가
                      </h2>

                      <div
                        className="btn btn-icon btn-sm btn-active-icon-primary"
                        id="kt_modal_add_event_close"
                        onClick={() => {
                          setOpenModal(!isOpenModal);
                        }}
                      >
                        <span className="svg-icon svg-icon-1">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              opacity="0.5"
                              x="6"
                              y="17.3137"
                              width="16"
                              height="2"
                              rx="1"
                              transform="rotate(-45 6 17.3137)"
                              fill="currentColor"
                            />
                            <rect
                              x="7.41422"
                              y="6"
                              width="16"
                              height="2"
                              rx="1"
                              transform="rotate(45 7.41422 6)"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>

                    <div className="fv-row mb-9">
                      <label className="fs-6 fw-semibold required mb-2">
                        학습항목
                      </label>

                      <input
                        type="text"
                        id="event_name"
                        className="form-control form-control-solid"
                        placeholder=""
                        name="calendar_event_name"
                      />
                    </div>
                    <div className="fv-row mb-9" hidden>
                      <label className="fs-6 fw-semibold mb-2">
                        이벤트 설명
                      </label>

                      <input
                        type="text"
                        id="event_description"
                        className="form-control form-control-solid"
                        placeholder=""
                        value=""
                        name="calendar_event_description"
                      />
                    </div>

                    <div className="fv-row mb-9" hidden>
                      <label className="fs-6 fw-semibold mb-2">
                        이벤트 장소
                      </label>

                      <input
                        type="text"
                        id="event_location"
                        className="form-control form-control-solid"
                        placeholder=""
                        value=""
                        name="calendar_event_location"
                      />
                    </div>

                    <div className="fv-row mb-9">
                      <div className="col">
                        <div className="fv-row mb-9">
                          <label className="fs-6 fw-semibold mb-2 required">
                            학습 시작일
                          </label>
                          <input
                            className="form-control form-control-solid"
                            name="calendar_event_start_date"
                            placeholder="YYYY-MM-DD 형식 날짜를 입력해주세요"
                            id="kt_calendar_datepicker_start_date"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="fv-row mb-9">
                      <div className="col">
                        <div className="fv-row mb-9">
                          <label className="fs-6 fw-semibold mb-2 required">
                            학습 종료일
                          </label>
                          <input
                            className="form-control form-control-solid"
                            name="calendar_event_end_date"
                            placeholder="YYYY-MM-DD 형식 날짜를 입력해주세요"
                            id="kt_calendar_datepicker_end_date"
                          />
                        </div>
                      </div>
                      <div className="col" data-kt-calendar="datepicker"></div>
                    </div>
                    <div className="modal-footer flex-center">
                      <button
                        type="reset"
                        id="kt_modal_add_event_cancel"
                        className="btn btn-light me-3"
                        onClick={() => {
                          setOpenModal(!isOpenModal);
                        }}
                      >
                        취소
                      </button>

                      <button
                        type="submit"
                        id="kt_modal_add_event_submit"
                        className="btn btn-primary"
                      >
                        <span
                          className="indicator-label"
                          onClick={(e) => {
                            console.log("!!!!!!!!!!!");
                            // e.preventDefault();
                          }}
                        >
                          등록
                        </span>
                        <span className="indicator-progress">
                          Please wait...
                          <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
                {/* //////////////////// */}
              </Modal>
            )}
            {isOpenModal_view && (
              <Modal_view onClickToggleModal_view={onClickToggleModal_view}>
                <div className="modal-dialog modal-dialog-centered">
                  <div
                    className="modal-content"
                    style={{
                      width: "520px",
                    }}
                  >
                    <div className="modal-header border-0 justify-content-end">
                      <div
                        className="btn btn-icon btn-sm btn-color-gray-400 btn-active-icon-primary me-2"
                        data-bs-toggle="tooltip"
                        data-bs-dismiss="click"
                        title="Edit Event"
                        id="kt_modal_view_event_edit"
                        hidden
                      >
                        <span className="svg-icon svg-icon-2">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.3"
                              d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z"
                              fill="currentColor"
                            />
                            <path
                              d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </div>
                      <div
                        className="btn btn-icon btn-sm btn-color-gray-400 btn-active-icon-danger me-2"
                        data-bs-toggle="tooltip"
                        data-bs-dismiss="click"
                        title="Delete Event"
                        id="kt_modal_view_event_delete"
                        hidden
                      >
                        <span className="svg-icon svg-icon-2">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z"
                              fill="currentColor"
                            />
                            <path
                              opacity="0.5"
                              d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z"
                              fill="currentColor"
                            />
                            <path
                              opacity="0.5"
                              d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </div>
                      <div
                        className="btn btn-icon btn-sm btn-color-gray-500 btn-active-icon-primary"
                        data-bs-toggle="tooltip"
                        title="Hide Event"
                        data-bs-dismiss="modal"
                        onClick={() => {
                          setOpenModal_view(!isOpenModal_view);
                        }}
                      >
                        <span className="svg-icon svg-icon-1">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              opacity="0.5"
                              x="6"
                              y="17.3137"
                              width="16"
                              height="2"
                              rx="1"
                              transform="rotate(-45 6 17.3137)"
                              fill="currentColor"
                            />
                            <rect
                              x="7.41422"
                              y="6"
                              width="16"
                              height="2"
                              rx="1"
                              transform="rotate(45 7.41422 6)"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className="modal-body pt-0 pb-20 px-lg-17">
                      <div className="d-flex">
                        <span className="svg-icon svg-icon-1 svg-icon-muted me-5">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.3"
                              d="M21 22H3C2.4 22 2 21.6 2 21V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5V21C22 21.6 21.6 22 21 22Z"
                              fill="currentColor"
                            />
                            <path
                              d="M6 6C5.4 6 5 5.6 5 5V3C5 2.4 5.4 2 6 2C6.6 2 7 2.4 7 3V5C7 5.6 6.6 6 6 6ZM11 5V3C11 2.4 10.6 2 10 2C9.4 2 9 2.4 9 3V5C9 5.6 9.4 6 10 6C10.6 6 11 5.6 11 5ZM15 5V3C15 2.4 14.6 2 14 2C13.4 2 13 2.4 13 3V5C13 5.6 13.4 6 14 6C14.6 6 15 5.6 15 5ZM19 5V3C19 2.4 18.6 2 18 2C17.4 2 17 2.4 17 3V5C17 5.6 17.4 6 18 6C18.6 6 19 5.6 19 5Z"
                              fill="currentColor"
                            />
                            <path
                              d="M8.8 13.1C9.2 13.1 9.5 13 9.7 12.8C9.9 12.6 10.1 12.3 10.1 11.9C10.1 11.6 10 11.3 9.8 11.1C9.6 10.9 9.3 10.8 9 10.8C8.8 10.8 8.59999 10.8 8.39999 10.9C8.19999 11 8.1 11.1 8 11.2C7.9 11.3 7.8 11.4 7.7 11.6C7.6 11.8 7.5 11.9 7.5 12.1C7.5 12.2 7.4 12.2 7.3 12.3C7.2 12.4 7.09999 12.4 6.89999 12.4C6.69999 12.4 6.6 12.3 6.5 12.2C6.4 12.1 6.3 11.9 6.3 11.7C6.3 11.5 6.4 11.3 6.5 11.1C6.6 10.9 6.8 10.7 7 10.5C7.2 10.3 7.49999 10.1 7.89999 10C8.29999 9.90003 8.60001 9.80003 9.10001 9.80003C9.50001 9.80003 9.80001 9.90003 10.1 10C10.4 10.1 10.7 10.3 10.9 10.4C11.1 10.5 11.3 10.8 11.4 11.1C11.5 11.4 11.6 11.6 11.6 11.9C11.6 12.3 11.5 12.6 11.3 12.9C11.1 13.2 10.9 13.5 10.6 13.7C10.9 13.9 11.2 14.1 11.4 14.3C11.6 14.5 11.8 14.7 11.9 15C12 15.3 12.1 15.5 12.1 15.8C12.1 16.2 12 16.5 11.9 16.8C11.8 17.1 11.5 17.4 11.3 17.7C11.1 18 10.7 18.2 10.3 18.3C9.9 18.4 9.5 18.5 9 18.5C8.5 18.5 8.1 18.4 7.7 18.2C7.3 18 7 17.8 6.8 17.6C6.6 17.4 6.4 17.1 6.3 16.8C6.2 16.5 6.10001 16.3 6.10001 16.1C6.10001 15.9 6.2 15.7 6.3 15.6C6.4 15.5 6.6 15.4 6.8 15.4C6.9 15.4 7.00001 15.4 7.10001 15.5C7.20001 15.6 7.3 15.6 7.3 15.7C7.5 16.2 7.7 16.6 8 16.9C8.3 17.2 8.6 17.3 9 17.3C9.2 17.3 9.5 17.2 9.7 17.1C9.9 17 10.1 16.8 10.3 16.6C10.5 16.4 10.5 16.1 10.5 15.8C10.5 15.3 10.4 15 10.1 14.7C9.80001 14.4 9.50001 14.3 9.10001 14.3C9.00001 14.3 8.9 14.3 8.7 14.3C8.5 14.3 8.39999 14.3 8.39999 14.3C8.19999 14.3 7.99999 14.2 7.89999 14.1C7.79999 14 7.7 13.8 7.7 13.7C7.7 13.5 7.79999 13.4 7.89999 13.2C7.99999 13 8.2 13 8.5 13H8.8V13.1ZM15.3 17.5V12.2C14.3 13 13.6 13.3 13.3 13.3C13.1 13.3 13 13.2 12.9 13.1C12.8 13 12.7 12.8 12.7 12.6C12.7 12.4 12.8 12.3 12.9 12.2C13 12.1 13.2 12 13.6 11.8C14.1 11.6 14.5 11.3 14.7 11.1C14.9 10.9 15.2 10.6 15.5 10.3C15.8 10 15.9 9.80003 15.9 9.70003C15.9 9.60003 16.1 9.60004 16.3 9.60004C16.5 9.60004 16.7 9.70003 16.8 9.80003C16.9 9.90003 17 10.2 17 10.5V17.2C17 18 16.7 18.4 16.2 18.4C16 18.4 15.8 18.3 15.6 18.2C15.4 18.1 15.3 17.8 15.3 17.5Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>

                        <div className="mb-9">
                          <div className="d-flex align-items-center mb-2">
                            <span
                              className="fs-3 fw-bold me-3"
                              data-kt-calendar="event_name"
                            >
                              {title_text}
                            </span>
                            <span
                              className="badge badge-light-success"
                              data-kt-calendar="all_day"
                            ></span>
                          </div>

                          <div
                            className="fs-6"
                            data-kt-calendar="event_description"
                            hidden
                          >
                            {description_text}
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <span className="svg-icon svg-icon-1 svg-icon-success me-5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <circle fill="currentColor" cx="12" cy="12" r="8" />
                          </svg>
                        </span>

                        <div className="fs-6">
                          <span className="fw-bold">시작일 </span>
                          <span data-kt-calendar="event_start_date">
                            {start_time_text}
                          </span>
                        </div>
                      </div>
                      {end_time_text !== "Invalid date" && (
                        <div className="d-flex align-items-center mb-9">
                          <span className="svg-icon svg-icon-1 svg-icon-danger me-5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              version="1.1"
                            >
                              <circle
                                fill="currentColor"
                                cx="12"
                                cy="12"
                                r="8"
                              />
                            </svg>
                          </span>

                          <div className="fs-6">
                            <span className="fw-bold">종료일 </span>
                            <span data-kt-calendar="event_end_date">
                              {end_time_text}
                            </span>
                          </div>
                        </div>
                      )}

                      <div className="d-flex align-items-center">
                        <span
                          className="svg-icon svg-icon-1 svg-icon-muted me-5"
                          hidden
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.3"
                              d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z"
                              fill="currentColor"
                            />
                            <path
                              d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>

                        <div
                          className="fs-6"
                          data-kt-calendar="event_location"
                          hidden
                        >
                          <span className="fw-bold">이벤트 장소 </span>
                          {locaion_text}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* //////////////////// */}
              </Modal_view>
            )}
          </Main>
        </div>
      </div>
    </div>
  );
};
const Main = styled.main`
  width: 10%;
  height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h3`
  text-align: center;
`;

const DialogButton = styled.button`
  width: 160px;
  height: 48px;
  background-color: blueviolet;
  color: white;
  font-size: 1.2rem;
  font-weight: 400;
  border-radius: 4px;
  border: none;
  cursor: pointer;

  &:hover {
    transform: translateY(-1px);
  }
`;
export default Calendar_plan;
