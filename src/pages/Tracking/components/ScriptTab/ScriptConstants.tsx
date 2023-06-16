import React, { useContext } from "react";
import ClipboardJS from "clipboard";
import { useAppSelector } from "../../../../hooks/appDispatch";
import { ContainerScript } from "../../styled-components/TableRule";
import { CopyButton } from "../../../../styled-components/button/index";
import { ThemeContext } from "../../../../utilities/theme/ThemeContext";

const ScriptConstants = ({ funnels }: any) => {
  new ClipboardJS(".btn");
  const funnelsId: any = useAppSelector(
    (state) => state.dashboard.dataTracking
  );
  // const { isEdit } = useAppSelector(({ funnelModal }) => funnelModal.modal);
  console.log("-funnels-", funnels.length);
  const script1 = '<script type="text/javascript">';
  const script2 = `var funnel = ${
    !funnelsId[0]?.id
      ? "Debes crear un Funnel"
      : funnels
      ? funnels
      : funnelsId[0]?.id
  };`;
  const script3 = "var head = document.head;";
  const script4 = "var script = document.createElement('script');";
  const script5 = "script.type = 'text/javascript';";
  const script6 =
    'script.src = "https://api-roalytics.herokuapp.com/api/v1/get_script";';
  const script7 = "head.appendChild(script);";
  const script8 = "</script>";

  const handleButton = () => {
    const btn: any = document.querySelector(".btn-copy");
    btn.style.backgroundColor = "#0acf97";
    btn.textContent = "Script copiado";
    setTimeout(() => {
      btn.style.backgroundColor = "#109CF1";
      btn.textContent = "Copiar Guión";
    }, 1000);
    console.log("btnCopy", btn);
  };

  const { theme, themeTitleModal } = useContext(ThemeContext);

  return (
    <>
      <ContainerScript theme={theme}>
        <div>{script1}</div>
        <div className="ml-2">{script2}</div>
        <div className="ml-2">{script3}</div>
        <div className="ml-2">{script4}</div>
        <div className="ml-2">{script5}</div>
        <div className="ml-2">{script6}</div>
        <div className="ml-2">{script7}</div>
        <div>{script8}</div>
      </ContainerScript>
      <div className="row mt-2">
        <div
          className="col-sm-12 d-flex justify-content-end"
          style={{ paddingRight: "11px" }}
        >
          <CopyButton
            className="btn w-25 btn-copy"
            data-clipboard-text={`<script type="text/javascript">
            var funnel = ${funnels ? funnels : funnelsId[0]?.id}
            var head = document.head;
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = "https://api-roalytics.herokuapp.com/api/v1/get_script";
            head.appendChild(script);
            </script>`}
            onClick={handleButton}
          >
            Copiar Guión
          </CopyButton>
        </div>
      </div>
    </>
  );
};

export default ScriptConstants;
