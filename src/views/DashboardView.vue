<template>
  
    <div class="container-fluid flex items-start w-full">
        <sidebar-component></sidebar-component>
        <main class="dash-view claims-views clients-view">
            <div class="tp-dash-vw">
                <span>Lessons</span>
                <div class="dash-notifications">
                    <div class="bell">
                        <svg width="34" height="37" viewBox="0 0 34 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.5952 7.83333V7.83333C12.5792 7.83333 9.0786 10.5666 8.10458 14.4626L6.68278 20.1498C6.15151 22.2749 4.84726 24.1256 3.02469 25.3407V25.3407C2.11859 25.9447 2.54623 27.3571 3.63523 27.3571H29.5552C30.6442 27.3571 31.0719 25.9447 30.1658 25.3407V25.3407C28.3432 24.1256 27.039 22.2749 26.5077 20.1498L25.0859 14.4626C24.1119 10.5665 20.6112 7.83333 16.5952 7.83333V7.83333ZM16.5952 7.83333V1"
                                stroke="#4A4A4A" stroke-width="2" stroke-linecap="round" />
                            <path
                                d="M11.879 31.5488C12.1571 32.5867 12.7699 33.5038 13.6223 34.1579C14.4748 34.812 15.5192 35.1665 16.5937 35.1665C17.6681 35.1665 18.7126 34.812 19.565 34.1579C20.4174 33.5038 21.0302 32.5867 21.3083 31.5488"
                                stroke="#FF0000" stroke-width="2" stroke-linecap="round" />
                        </svg>
                    </div>
                    <div class="notify-num">8</div>
                </div>
            </div>
        </main>
    </div>
    </template>
    
    <script>
    import SidebarComponent from '@/components/sidebar/StudentSidebar.vue'
    export default {
      components: { SidebarComponent },
    
    }
    </script>
    
    <style scoped>
    * {
    margin: 0px;
    box-sizing: border-box;
    padding: 0px;
    list-style: none;
    text-decoration: none;
    font-family: 'Inter', sans-serif;
}

html {
    scroll-behavior: smooth;
    margin: 0 !important;
    padding: 0 !important;
    height: 100%;
    width: 100%;
}

body {
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
}

.dash-nav {
    height: 100vh;
    padding: 15px;
    background-color: #0F305E;
    width: 20vw !important;
    position: relative;
}

.ins-lg {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.dash-lg svg {
    height: 90px;
    width: 150px;
}

.dash-arrow button {
    height: 30px;
    width: 30px;
    border: 0px;
    border-radius: 10px;
    background-color: #345687;
    color: #ffffff;
    outline: none;
    cursor: pointer;
}

.dash-links {
    padding: 25px 0px;
}

.dash-links .link {
    margin: 6px 0px;
}

.dash-links .link a,
.nav-profile .link a {
    padding: 10px 20px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
 
}

.link-text,
.link-icon,
.help-icon {
    height: 100%;
    width: fit-content;
    min-width: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    pointer-events: none;
}

.link-text,
.help-text {
    padding: 0px 14px;
}

.dash-links .link a.active,
.dash-links .link a:hover,
.nav-profile .link a:hover {
    background-color: #ffffff;
    color: #1787E0;
}

.dash-links .link a.active svg path,
.dash-links .link a:hover svg path {
    stroke: #1787E0 !important;
}

.red-status {
    height: 8px;
    width: 8px;
    border-radius: 4px;
    background-color: #F64018;
    margin: 0px 0px 0px 20px;
}

.inbox-msgs {
    height: 24px;
    width: 24px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    font-weight: 500;
    color: #ffffff;
    background-color: #E72424;
    margin: 0px 0px 0px 12px;
}

.nav-profile {
    position: absolute;
    bottom: 15px;
    left: 15px;
    width: 250px;
}

.nav-profile .link {
    margin: 0px 0px 20px;
}

.nav-profile .profile {
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #395E93;
    border-radius: 12px;
}

.profile .pr-img {
    height: 50px;
    width: 50px;
    border-radius: 25px;
    overflow: hidden;
    position: relative;
}

.name-initials {
    position: absolute;
    bottom: -10px;
    right: -5px;
    height: 30px;
    width: 30px;
    padding: 0px 3px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    color: #ffffff;
    background-color: #2D3B79;
    border-radius: 10px;
}

.pr-text h4 {
    font-size: 14px;
    color: #ffffff;
    margin: 0px 0px 4px;
}

.pr-text p {
    font-size: 12px;
    color: #45B9FB;
}

.pr-drpdwn button {
    background-color: #00000000;
    border: 0px;
    padding: 5px;
    outline: none;
}

.profile .pr-img img {
    width: 100%;
}

.dash-view {
    height: 100%;
    width: 80vw;
    flex-grow: 2;
    background-color: #F8F8F8;
    padding: 15px;
    overflow-y: scroll;
}

.tp-dash-vw {
    height: 94px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 15px;
}

.tp-dash-vw span {
    font-size: 24px;
    font-weight: 600;
    line-height: 36px;
    color: #000000;
}

.tp-dash-vw span u {
    color: #A9A9A9;
}

.tp-dash-vw button.status {
    height: 30px;
    width: fit-content;
    padding: 0px 14px;
    background-color: #E4F5ED;
    border-radius: 10px;
    border: 0px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 0px 0px 0px 14px;
    font-size: 12px;
    font-weight: 500;
}

.tp-dash-vw button.status svg {
    margin: 0px 10px 0px 0px;
}

.tp-dash-vw-right,
.tp-dash-action,
.tp-dash-pg-btns,
.dash-icon-status {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.dash-icon-status .text {
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
    color: #FF0000;
    padding: 0px 10px;
}

.tp-dash-pg-btns button {
    height: 30px;
    width: 30px;
    border-radius: 10px;
    border: 1px solid #E2DFDF;
    outline: none;
    background-color: #f8f8f8;
    margin: 0px 4px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.tp-dash-drpdwn {
    position: relative;
    margin: 0px 40px 0px 0px;
}

.tp-dash-drpdwn button.drp-action-btn {
    height: 36px;
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #0166FF;
    border: 0px;
    outline: none;
    padding: 0px 14px;
    color: #ffffff;
    font-size: 14px;
    font-weight: 500;
    line-height: 22;
    border-radius: 10px;
}

.tp-dash-drpdwn button.drp-action-btn .drp-btn-text {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 24px;
    padding: 0px 6px;
    border-right: 3px solid #ffffff;
    pointer-events: none;
}

.tp-dash-drpdwn button.drp-action-btn .drp-icon {
    padding: 4px 4px 4px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
}

.drop-dwn-menu {
    position: absolute;
    top: 0px;
    right: 0px;
    z-index: 10;
    background-color: #ffffff;
    border-radius: 10px;
    padding: 10px 0px;
    display: none;
    width: 236px;
    box-shadow: 2px 2px 12px #00000033;
}

.drp-menu.top {
    display: flex;
    align-items: center;
    justify-content: space-between !important;
}

.drp-menu.top .text {
    font-size: 13px;
    font-weight: 600;
    line-height: 15px;
    color: #8a8a8a;
}

.drp-menu.top .switch {
    position: relative;
    display: inline-block;
    width: 25px;
    height: 14px;
}

.drp-menu.top .switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.drp-menu.top .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
}

.drp-menu.top .slider:before {
    position: absolute;
    content: "";
    height: 12px;
    width: 12px;
    left: 2px;
    bottom: 1px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
}

.drp-menu.top input:checked+.slider {
    background-color: #2196F3;
}

.drp-menu.top input:focus+.slider {
    box-shadow: 0 0 1px #2196F3;
}

.drp-menu.top input:checked+.slider:before {
    -webkit-transform: translateX(10px);
    -ms-transform: translateX(10px);
    transform: translateX(10px);
}

/* Rounded sliders */
.drp-menu.top .slider.round {
    border-radius: 34px;
}

.drp-menu.top .slider.round:before {
    border-radius: 50%;
}

.drop-dwn-menu button.drp-menu {
    border: 0px;
    padding: 14px 20px;
    outline: none;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
}

.drop-dwn-menu button.drp-menu:hover {
    background-color: #D9E8FF;
}

.drop-dwn-menu button.drp-menu svg {
    margin: 0px 10px 0px 0px;
}

.tp-dash-vw .dash-notifications {
    position: relative;
}

.tp-dash-vw .dash-notifications .bell {
    height: 30px;
    width: 33px;
}

.notify-num {
    height: 15px;
    width: 15px;
    border-radius: 7.5px;
    position: absolute;
    top: 2px;
    right: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fc2929;
    color: #ffffff;
    font-weight: 500;
    font-size: 10px;
}


/* == CLAIMS == */
.claims-views {
    overflow: hidden;
    height: 100vh;
    position: relative;
    overflow-y: scroll;
    overflow-x: hidden;
}

.claims-views .tp-dash-vw {
    border-bottom: 1px solid #E4E4E4;
}

.tp-dash-vw-left {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.claims-top {
    padding: 20px 0px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
}

.claims-top form {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.claims-top form .fm-ctrl label {
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
    color: #959595;
}

.claims-top form .fm-ctrl {
    padding: 0px 10px 0px;
}

.claims-top form .fm-ctrl input {
    height: 40px;
    width: 200px;
    border: 1px solid #E2DFDF;
    background-color: #f8f8f8;
    border-radius: 10px;
    outline: none;
    padding: 10px 40px;
}

.claims-top form .fm-ctrl select:after {
    position: absolute;
    right: 13px;
}

.claims-top form .fm-ctrl select,
.claims-top form .fm-ctrl select option {
    height: 40px;
    width: 200px;
    padding: 6px 13px;
    border: 1px solid #E2DFDF;
    background-color: #f8f8f8;
    border-radius: 10px;
    outline: none;
    position: relative;
}

.claims-top form .fm-ctrl .filters {
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #E2DFDF;
    border-radius: 10px;
}

.claims-top form .fm-ctrl .input-hold {
    position: relative;
    height: fit-content;
    width: fit-content;
}

.search-icon {
    position: absolute;
    top: 13px;
    left: 13px;
    height: fit-content;
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
}

.claims-top .record-file-view {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.record-file-view .record-view {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.record-file-view .record-view span {
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
    margin: 0px 12px 0px 0px;
    color: #959595;
}

.record-view-btns {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    border: 1px solid #E2DFDF;
}

.record-view-btns button {
    height: 40px;
    width: 58px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0px;
    outline: none;
}

.record-view-btns button.one {
    background-color: #1787E0;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}

.record-view-btns button.two {
    background-color: #f8f8f8;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}

.file-claim-btn {
    border-radius: 10px;
    height: 40px;
    width: fit-content;
    padding: 0px 20px;
    background-color: #E7F4FF;
    color: #1787E0;
    margin: 0px 0px 0px 12px;
    outline: none;
    border: 0px;
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
}

.tbl-form {
    display: flex;
    align-items: flex-start !important;
    justify-content: center;
}

.keep-me {
    height: 21px;
    width: 21px;
    margin: 0px;
}

/* The ctn-check */
.ctn-check {
    display: block;
    position: relative;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

/* Hide the browser's default checkbox */
.ctn-check input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

/* Create a custom checkbox */
.ctn-check .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    border: 1.2px solid #E2DFDF;
    border-radius: 4px;
    height: 20px;
    width: 20px;
    background-color: #ffffff00;
}

/* On mouse-over, add a grey background color */
.ctn-check:hover input~.checkmark {
    background-color: #ffffff;
}

/* When the checkbox is checked, add a blue background */
.ctn-check input:checked~.checkmark {
    background-color: #0F305E;
}

/* Create the checkmark/indicator (hidden when not checked) */
.ctn-check .checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

/* Show the checkmark when checked */
.ctn-check input:checked~.checkmark:after {
    display: block;
}

/* Style the checkmark/indicator */
.ctn-check .checkmark:after {
    left: 6px;
    top: 2px;
    width: 4px;
    height: 8px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}

.record-table table {
    width: 100%;
    font-size: 14px;
    font-weight: 500;
    border-collapse: collapse;
}

.record-table table thead tr {
    background-color: #0F305E;
    color: #ffffff;
    border: none;
}

.record-table table tbody tr {
    border-bottom: 1px solid #E2DFDF;
}

.record-table table thead tr th,
.record-table table tbody tr td {
    border: none !important;
    text-align: left;
    padding: 10px 4px;
}

.record-table table tbody tr td button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #00000000;
    border: 0px;
    outline: none;
    padding: 2px;
    cursor: pointer;
}

.record-table table tbody tr td a {
    color: #000000;
}

.record-table table .percentage {
    width: 80px;
    height: 3px;
    background-color: #E4E4E4;
    position: relative;
}

.record-table table .percentage .percent-line {
    height: 3px;
    position: absolute;
    left: 0px;
    top: 0px;
}

.record-table table .percentage .percent-line.one {
    width: 20%;
    background-color: #84DD3E;
}

.record-table table .percentage .percent-line.two {
    width: 35%;
    background-color: #F64018;
}

.record-table table .percentage .percent-line.three {
    width: 67%;
    background-color: #8A8A8A;
}

.record-pagination {
    position: sticky;
    bottom: -15px;
    left: 0px;
    width: 100%;
    height: 65px;
    background-color: #f8f8f8;
    padding: 0px 15px;
}

.rec-pg-contain {
    height: 100%;
    width: 100%;
    margin: auto;
    border-top: 1px solid #E2DFDF;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.record-num {
    font-size: 14px;
    font-weight: 500;
    color: #000000;
}

.record-pg,
.rec-pg-select,
.ec-pg-num {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.rec-pg-select button {
    height: 30px;
    width: 34px;
    border-radius: 10px;
    border: 1px solid #E2DFDF;
    outline: none;
    background-color: #f8f8f8;
    margin: 0px 2px;
}

.rec-pg-num span {
    font-size: 14px;
    font-weight: 500;
    color: #000000;
    margin: 0px 2px;
}

.rec-pg-num input {
    height: 30px;
    width: 50px;
    border-radius: 10px;
    border: 1px solid #E2DFDF;
    outline: none;
    background-color: #f8f8f8;
    margin: 0px 2px;
    text-align: center;
}

.claim-data-top {
    height: fit-content;
    background-color: #ffffff;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.claim-data-info {
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
}

.claim-dt-left {
    padding: 40px 0px;
    flex-grow: 2;
}

.claim-data-top-contain,
.claim-data-bottom.tabbed {
    padding: 0px 25px 0px 15px;
}

.claim-dt-card {
    height: fit-content;
    padding: 0px 10px 0px 0px;
}

.claim-dt-card.border {
    border-right: 2px solid #E2DFDF;
}

.claim-dt-card h3 {
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    color: #959595;
}

.claim-dt-card p {
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    color: #000000;
}

.claim-dt-card.end {
    display: flex;
    align-items: center;
    justify-content: center;
}

.claim-dt-card.end button {
    border: 0px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    margin: 0px 10px;
}

.claim-data-bottom.tabbed {
    margin: 30px 0px 0px;
}

.claim-data-bottom.tabs {
    border-bottom: 1px solid #E2DFDF;
}

.claim-data-bottom.tabs .tab-buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

/* ===== TABS ====== */
/* CSS Styles */
.claim-data-bottom.tabbed .tabs {
    background-color: #f8f8f8;
}

.claim-data-bottom.tabbed .tabbed-sections {
    width: 100%;
    margin: 0 auto;
}

.claim-data-bottom.tabbed .tab-buttons {
    display: flex;
    justify-content: space-between;
    width: fit-content;
}

.claim-data-bottom.tabbed .tab-button {
    height: 36px;
    padding: 10px 20px;
    cursor: pointer;
    border-bottom: 4px solid transparent;
    color: #000;
    font-size: 14px;
    font-weight: 500;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}

.claim-data-bottom.tabbed .tab-button.active {
    color: #ffffff;
    background-color: #0F305E;
}

.claim-data-bottom.tabbed .tabs-content {
    height: 100%;
    background-color: #f8f8f8;
}

.claim-data-bottom.tabbed .tab-content {
    width: 100%;
    display: none;
    padding: 10px;
    background-color: #f8f8f8;
    padding: 20px 0px 0px 0px;
}

.claim-data-bottom.tabbed .tab-content.active {
    display: block;
}

.claim-data-bottom.tabbed .tab-title {
    padding: 10px 10px;
}

.claim-info-tab-content {
    background-color: #ffffff;
    padding: 14px;
    width: 100%;
    border-radius: 10px;
}

.claim-info-tab-content .cards,
.claim-info-tab-content .card.middle {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.claim-info-tab-content .cards {
    margin: 0px 0px 20px;
}

.claim-info-tab-content .card {
    height: fit-content;
    width: fit-content;
}

.card.middle .card.one {
    margin: 0px 30px 0px 0px;
}

.card.middle .card.two {
    margin: 0px 0px 0px 30px;
}

.claim-info-tab-content .card h3 {
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    color: #959595;
}

.claim-info-tab-content .card p {
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    color: #000000;
}

.claim-info-tab-content .card button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0px;
    outline: none;
    cursor: pointer;
    padding: 5px;
    background-color: #ffffff;
}

/* ===== TABS ====== */
.claim-info-table {
    width: 100%;
    padding: 0px 0px 20px;
}

.claim-info-table .tbl-ttl span {
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
    color: #000000;
    margin: 6px 0px;
}

.claim-info-table table {
    width: 100%;
    font-size: 14px;
    font-weight: 500;
    border-collapse: collapse;
}

.claim-info-table table thead {
    background-color: #0F305E;
    color: #ffffff;
}

.claim-info-table table tbody tr {
    border-bottom: 1px solid #E2DFDF;
}

.claim-info-table table thead tr th,
.claim-info-table table tbody tr td {
    border: none !important;
    text-align: left;
    padding: 10px 4px;
}

.claim-info-tabletable tbody tr td.dark-blue {
    background-color: #0F305E !important;
    color: #ffffff;
}

.claim-info-tab-content.bm-sect {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
}

.claim-info-tab-content.bm-sect .card {
    width: 240px;
}

.image-card {
    height: 150px;
    width: 264px;
    border-radius: 16px;
    border: 1px dashed #E2DFDF;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.image-card-txt {
    position: relative;
}

.image-card span {
    font-size: 15px;
    font-weight: 500;
    line-height: 22px;
    color: #959595;
    padding: 0px 0px 16px;
    position: absolute;
    margin: auto;
    top: -10px;
    left: 0px;
    width: 100%;
}

.image-card button.btn {
    padding: 0px;
    border: 1px solid #E2DFDF;
    background-color: #ffffff;
    color: #000000;
    outline: none;
    border-radius: 10px;
    font-size: 13px;
    font-weight: 500;
    line-height: 21px;
    height: 32px;
    width: 140px;
}


.image-card input[type=file] {
    height: 32px;
    width: 140px;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
}

.claim-dt-right {
    height: 100%;
    min-height: fit-content !important;
    width: 340px;
    background-color: #ffffff;
    position: relative;
}

.claim-dt-right-tab {
    height: 100%;
    width: 100%;
}

.claim-dt-right.tabs {
    height: fit-content;
    width: 100% !important;
    border-bottom: 1px solid #E2DFDF;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0px 20px;
}

.claim-dt-right.tabs .tab-buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 8px 0px 0px;
}

.claim-dt-right.tabs .tab-buttons .side-tab-button {
    padding: 8px 20px 8px 10px;
    color: #000000;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 3px solid #0166FF00;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
}

.tab-buttons .side-tab-button.active {
    color: #0166FF;
    border-bottom: 3px solid #0166FF !important;
}

.side-tab-content {
    display: none;
    padding: 14px 7px 14px 18px;
    width: 100%;
}

.side-tab-content.active {
    display: block;
    background-color: #ffffff;
    padding-bottom: 70px;
}

.dt-notes-num.box {
    height: 18px;
    width: 18px;
    border-radius: 4px;
    background-color: #D1E4FF;
    color: #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    font-weight: 400;
    line-height: 18px;
    margin: 0px 0px 0px 4px;
}

.side-tb-content {
    padding: 0px 0px 0px 15px;
}

.side-tab-title {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 20px 0px 10px;
}

.side-tab-title .icon {
    margin-left: -15px;
    height: 30px;
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
}

.side-tab-title-text {
    font-size: 14px;
    font-weight: 600;
    line-height: 22px;
    color: #000000;
    margin-left: 10px;
}

.side-tab-title-text.blue-text {
    color: #0066F9 !important;
    font-size: 13px;
    margin-left: 0px !important;
}

.side-tb-content {
    border-left: 1px dashed #E2DFDF;
}

.side-tb-content.rm-border {
    border-left: 0px !important;
}

.side-tb-content .content {
    font-size: 11px;
    font-weight: 500;
    line-height: 21px;
    color: #6C6C6C;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    border-bottom: 1px solid #E2DFDF;
    padding: 4px 0px;
}

.side-tb-content .content .txt {
    padding: 0px 6px 0px 0px;
}

.side-tb-content .content .time-stamp {
    min-width: 120px;
}

.claim-dt-bottom-time {
    position: absolute;
    bottom: 0px;
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
    font-style: italic;
    color: #727272;
    padding: 14px 14px 10px;
}

.updates-content {
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 6px 0px;
}

.updates-content .icon {
    position: absolute;
    left: -20px;
}

.updates-content .updates-text {
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    color: #6C6C6C;
}

.updates-content .updates-timestamp {
    font-size: 11px;
    font-weight: 500;
    line-height: 21px;
    color: #6C6C6C;
}

#notes {
    padding: 15px;
}

#notes .note-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

#notes .note-status-btns {
    height: fit-content;
    width: fit-content;
    border-radius: 10px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    border: 1px solid #E2DFDF;
}

#notes .note-status-btns button,
#notes .note-add-btn button {
    width: fit-content;
    font-size: 13px;
    font-weight: 500;
    line-height: 21px;
    color: #000000;
    padding: 8px 16px;
    outline: none;
    border: 0px;
}

#notes .note-status-btns button.btn-active {
    background-color: #C6DBFC;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}

#notes .note-status-btns button.btn-resolved {
    background-color: #ffffff;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}

#notes .note-add-btn button {
    color: #0166FF !important;
    background-color: #00000000 !important;
}

#notes .note-card {
    height: fit-content;
    width: 100%;
    padding: 14px;
    margin: 20px 0px;
    background-color: #F8F8F8;
    border-radius: 8px;
}

#notes .card-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
}

#notes .card-top button {
    padding: 5px;
    background-color: #00000000;
    border: 0px;
    outline: none;
}

#notes .card-timestamp {
    font-size: 12px;
    font-weight: 400;
    line-height: 22px;
    color: #6C6C6C;
}

#notes .card-text {
    font-size: 13px;
    font-weight: 400;
    line-height: 17px;
    color: #000000;
    padding: 6px 0px;
}

#notes .card-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

#notes .card-bm-btns {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

#notes .card-bm-btns button {
    font-size: 10px;
    line-height: 22px;
    font-weight: 500;
    padding: 2px 10px;
    border-radius: 4px;
    margin: 0px 10px 0px 0px;
    border: 0px;
    background-color: #EAEAF2;
}

#notes .card-bottom button.i-btn {
    padding: 5px;
    background-color: #00000000;
    border: 0px;
    outline: none;
}

#notes .card-bottom button.i-btn svg {
    margin: 0px 6px 0px 0px;
}

/* == || CLAIMS == */






/* == CLIENTS == */
.clients-top {
    padding: 20px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.clients-top-card{
    background-color: #ffffff;
    border-radius: 20px;
    padding: 20px;
    width: 320px;
    margin: 10px 10px 0px 0px;
}

.add-form-card{
    background-color: #ffffff;
    border-radius: 20px;
    padding: 10px;
    width: 320px;
    height: 200px;
    margin: 10px 10px 0px 0px;
}
.add-template-card{
    background-color: #ffffff;
    border-radius: 20px;
    padding: 20px;
    width: 320px;
    height: 180px;
    margin: 10px 10px 0px 0px;
}
.clients-top-card h2{
    line-height: 30px;
}
.clients-top-card p{
    line-height: 30px;
    color: #909090;
}

.record-table table tbody tr td.green {
    color: #0A8C2E;
}

.record-table table tbody tr td.red {
    color: #FF0000;
}

.record-table table tbody tr td.grey {
    color: #9B9B9B;
}

.record-table table tbody tr td.yellow {
    color: #F4B102;
}

.clients-view .record-table table tbody tr td button.view {
    background-color: #F1F3F2;
    padding: 6px 20px;
    color: #747474;
    border-radius: 13px;
}

/* == || CLIENTS == */

/* == POLICIES == */
.policies-data {
    padding: 20px 0px 0px;
}

/* ===== Policies TABS ====== */
.policies-data .tabs {
    background-color: #f8f8f8;
}

.policies-data .tab-buttons {
    display: flex;
    justify-content: space-between;
    width: fit-content;
}

.policies-data .policies-tab-button {
    height: 36px;
    width: fit-content;
    padding: 10px 30px;
    cursor: pointer;
    border-bottom: 4px solid transparent;
    color: #000;
    font-size: 14px;
    font-weight: 500;
}

.policies-data .policies-tab-button.active {
    color: #0066F9;
    border-bottom: 3px solid #0066F9;
}

.policies-data .policies-tabs-content {
    height: 100%;
    background-color: #f8f8f8;
}

.policies-data .policies-tab-content {
 
    padding: 10px;
    background-color: #f8f8f8;
    padding: 20px 0px 0px 0px;
}



.policies-data .tab-title {
    padding: 10px 10px;
}

/* ===== Policies TABS ====== */
.policy-table table {
    width: 100%;
    border-collapse: collapse;
}

.policy-table table thead.top-th {
    background-color: #0F305E;
    border: 1px solid #0F305E;
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    color: #ffffff;
}

.policy-table table thead th,
.policy-table table tbody td {
    padding: 14px 10px;
    text-align: left;
}

.policy-table table thead th.first,
.policy-table table tbody td.first {
    width: 41px !important;
}

.policy-table table thead th.keep-me {
    height: 21px;
    width: 21px;
    margin: 0px !important;
}

/* The.p-t-col  ctn-check */
.policy-table table thead .ctn-check {
    display: block;
    position: relative;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

/* Hide the browser's default checkbox */
.policy-table table thead .ctn-check input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

/* Create a custom checkbox */
.policy-table table thead .ctn-check .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    border: 1.2px solid #E2DFDF;
    border-radius: 4px;
    height: 20px;
    width: 20px;
    background-color: #ffffff00;
}

/* On mouse-over, add a grey background color */
.policy-table table thead .ctn-check:hover input~.checkmark {
    background-color: #ffffff;
}

/* When the checkbox is checked, add a blue background */
.policy-table table thead .ctn-check input:checked~.checkmark {
    background-color: #0F305E;
}

/* Create the checkmark/indicator (hidden when not checked) */
.policy-table table thead .ctn-check .checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

/* Show the checkmark when checked */
.policy-table table thead .ctn-check input:checked~.checkmark:after {
    display: block;
}

/* Style the checkmark/indicator */
.policy-table table thead .ctn-check .checkmark:after {
    left: 5px;
    top: 2px;
    width: 4px;
    height: 8px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}

.policy-table table tbody.white-h td {
    border: 1px solid #E4E4E4;
}

.policy-table table tbody.white-h tr td:nth-child(1) {
    border-right: 0px !important;
}

.policy-table table tbody.white-h tr td:nth-child(2) {
    border-left: 0px !important;
}

.policy-table table thead.white-h {
    background-color: #ffffff !important;
    color: #000000;
}

.policy-accordion-btn {
    height: 36px;
    width: 160px;
    border: 0px;
    outline: none;
    border-radius: 18px;
    font-size: 11px;
    font-weight: 500;
    line-height: 18px;
    padding-left: 20px;
    padding-right: 20px;
    cursor: pointer;
}

.policy-accordion-btn.coverage {
    background-color: #0F305E;
    color: #ffffff;
}


.policy-accordion-btn.renew {
    background-color: #FF0000;
    color: #ffffff;
}

table.fold-table>tbody>tr.view td,
table.fold-table>tbody>tr.view th {
    cursor: pointer;
}

/* table.fold-table>tbody>tr.view:hover {
    background: #0F305E;
    color: #ffffff;
    border: 1px solid #0F305E !important;
} */
table.fold-table>tbody>tr.view.active {
    background: #0F305E;
    color: #ffffff;
    border: 1px solid #0F305E !important;
}


table.fold-table>tbody>tr.view:hover td.table-dt-status {
    color: #ffffff !important;
}

table.fold-table>tbody>tr.view.open td.table-dt-status {
    color: #ffffff !important;
}

table.fold-table>tbody>tr.view.open {
    background: #0F305E;
    color: white;
    border: 1px solid #0F305E !important;
}

table.fold-table>tbody>tr.view {
    border: 1px solid #0F305E00;
}


table.fold-table>tbody>tr.fold {
    
    border: 1px solid #0F305E;
}




table.fold-table>tbody>tr td.table-dt-status.review {
    color: #EB7B0B;
}

table.fold-table>tbody>tr td.table-dt-status.expired {
    color: #EF1212;
}

table.fold-table>tbody>tr td.table-dt-status svg {
    margin: 0px 10px 0px 0px;
}

.policy-table table tbody td.folded-td {
    padding: 0px !important;
    background-color: #ffffff;
}

.td-txt-td .td-text {
    text-align: center;
}

.td-text .nxt-bill-txt {
    color: #8A8A8A;
    font-size: 16px;
    font-weight: 500;
    line-height: 28px;
}

.td-text .nxt-bill-price {
    color: #000000;
    font-size: 38px;
    font-weight: 700;
    line-height: 62px;
}

.td-txt-td .td-text a {
    height: 44px;
    width: 124px;
    background-color: #0F305E;
    border-radius: 22px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-size: 14px;
    font-weight: 500;
    line-height: 23px;
}

.td-txt-td .td-text a svg {
    margin-left: 5px;
}

/* == || POLICIES == */

    
    </style>