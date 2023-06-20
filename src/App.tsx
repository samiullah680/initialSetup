/* eslint-disable @typescript-eslint/no-explicit-any */
import { FlexLayout, Modal, TextField, TextStyles, Toast, ToastWrapper } from '@cedcommerce/ounce-ui';
import React, { Suspense, useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { hideNotification } from './Actions';
// import ShowMessage from './Components/Other/Message/ShowMessage';
import Auth from './components/auth';
import { ProtectedRoutes } from './components/navigation';
import { Completed, NewOnboarding, StepOne, StepThree, StepTwo, Welcome } from './components/onboarding';
import NoNetwork from './components/Panel/NoNetwork';
import Panel from './components/Panel/Panel';
import { InternetStatus } from "./components/utils/InternetIssue";
import { DI, DIProps } from './Core';
import './style.css';
interface PropsI extends DIProps {
  hideNotification: (id: number | string) => void;
}
function App(Props: PropsI): JSX.Element {
  const userId = Props.di.globalState.get(`user_id`);
  useEffect(() => {
    //watch internet status
    InternetStatus();
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/auth"
          element={
            <Suspense fallback={<></>}>
              <Auth />
            </Suspense>
          }>
          <Route path="*" element={<>NO Page Found 2</>} />
        </Route>
        <Route path="/onboarding" element={
          <Suspense fallback={<></>}>
            <ProtectedRoutes />
          </Suspense>
        }>
          {/* <Route path="welcome" element={<Welcome />} /> */}
          <Route index element={<NewOnboarding />} />
          {/* <Route path="step-one" element={<StepOne />} />
          <Route path="step-two" element={<StepTwo />} />
          <Route path="step-three" element={<StepThree />} /> */}
          <Route path="complete" element={<Completed />} />
          <Route path="*" element={<>NO Page Found 2</>} />
        </Route>
        <Route
          path="/panel/:uId/*"
          element={
            <Suspense fallback={<></>}>
              <Panel />
            </Suspense>
          }>
          <Route path="*" element={<>NO Page Found 2</>} />
        </Route>
        <Route
          path="/show/message"
          element={
            <Suspense fallback={<></>}>
              {/* <ShowMessage /> */}
            </Suspense>
          }>
          <Route path="*" element={<>NO Page Found 2</>} />
        </Route>
        <Route path="*" element={<Navigate to={'/auth/login'} />} />
        <Route path="/no-network" element={<NoNetwork />} />
      </Routes>
      <RenderToasts {...Props} />
      {/* <RenderModal {...Props} /> */}
    </>
  );
}

function RenderToasts(props: PropsI): JSX.Element {
  const { redux } = props;
  const { showToast } = redux;
  return (
    <ToastWrapper>
      {Object.keys(showToast).map((key: any) => {
        const toast = showToast[key];
        let type: any = 'success';
        if (toast.error) type = 'error';
        if (toast.warn) type = 'warning';
        return (
          <Toast
            key={key}
            type={type}
            // error={toast.error}
            onDismiss={() => props.hideNotification(key)}
            message={toast.message}
          />
        );
      })}
    </ToastWrapper>
  );
}

// import { Action } from 'redux';
// import { ThunkAction } from 'redux-thunk';

// type ReduxRI = ThunkAction<void, any, unknown, Action<string>>;

// function RenderModal(props: PropsI): JSX.Element {
//   const modalData = props?.redux?.MODAL;
//   const [textValue, setTextValue] = useState<any>('');
//   console.log(props);
//   const RenderModalContents = (props: any): JSX.Element => {
//     let jsx = <></>;
//     switch (props.modaldata.content) {
//       case "fetch_order_id": jsx =
//         <FlexLayout direction="vertical" spacing='loose'>
//           <TextStyles>Enter Order Id:</TextStyles>
//           <TextField autocomplete='off' value={textValue} onChange={(e) => setTextValue(e)} />
//         </FlexLayout>
//     }
//     return jsx;
//   }
//   return <Modal open={modalData?.open ?? false} close={() => { props.modal(false) }}
//     modalSize={modalData?.data?.modalSize ?? "medium"}
//     heading={modalData?.data?.heading ?? ''}
//   // primaryAction={modalData?.data?.primaryAction}
//   // secondaryAction={modalData?.data?.secondaryAction}
//   >
//     <>
//       <RenderModalContents modaldata={{ ...props, content: modalData?.data?.content ?? "" }} />
//     </>
//   </Modal>
// }

export default DI(App, { stateNeeded: true, func: { hideNotification } });

