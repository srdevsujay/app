import React from "react";
import { Link } from "react-router-dom";
import { Title } from "../../styled-components/Title/index";
import FooterMenu from "../Footer";

const Terminosycondiciones = () => {
  return (
    <>
      <div className="row justify-content-center">
        <div
          className="row col-12 align-items-center"
          style={{
            height: "90px",
            position: "sticky",
            top: 0,
            zIndex: 99999,
            background: "rgb(236 236 236)",
            fontFamily: "Helvetica-NeueL-Title",
          }}
        >
          <div className="col-6">
            <div className="page-title-box">
              <Title fontSize="22px" className="page-title pl-3">
                Términos y Condiciones
              </Title>
            </div>
          </div>
          <div className="col-6">
            <div className="page-title-box">
              <nav className="text-right pr-4">
                <Link to="/login">Volver</Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="col-md-12" style={{ fontFamily: "Helvetica-NeueL" }}>
          <div className="card">
            <div
              className="card-body"
              style={{ overflowY: "auto", height: "76vh" }}
            >
              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group">
                    <h4>1. Acuerdo de términos.</h4>
                    <ul>
                      <p>
                        1.1 Bienvenido a Roalytics, proporcionado por (Roalytics
                        LLC) (la “Compañía”, “nosotros”, “nuestros” o “nos”).
                        Nos complace ofrecerle acceso al Servicio, sujeto a
                        estos términos y condiciones (los “Términos de
                        Servicio”) y a la Política de Privacidad de la Compañía
                        (la “Política de Privacidad”). Al acceder y utilizar el
                        Servicio, usted expresa su consentimiento, acuerdo y
                        entendimiento de los Términos de Servicio y la Política
                        de Privacidad, Su negativa a aceptarlos podría limitar
                        su capacidad de utilizar plenamente el Servicio.
                        Agradecemos su presencia aquí.
                      </p>
                      <p className="mt-2">
                        1.2 Los términos y condiciones complementarios y otros
                        documentos pueden publicarse en nuestros sitios web,
                        plataformas y se incorporan expresamente por referencia.
                        Nos reservamos el derecho, a nuestro exclusivo criterio,
                        de realizar cambios y actualizaciones a estos Términos y
                        condiciones, en cualquier momento y por cualquier
                        motivo. Le recomendamos que revise periódicamente estos
                        Términos y condiciones y que se mantenga informado de
                        cualquier actualización. Le informaremos de cualquier
                        cambio sustancial en estos Términos y condiciones
                        utilizando la información de contacto y los métodos que
                        nos haya proporcionado. Usted estará sujeto y
                        considerará que ha sido informado de cualquier cambio en
                        estos Términos y condiciones por su uso continuado de
                        los Sitios web y Servicios.
                      </p>
                      <p>
                        1.3 El derecho de la Compañía a efectuar cambios al
                        Servicio. La Compañía puede agregar, cambiar, terminar,
                        remover o suspender cualquier material incorporado al
                        Servicio, incluyendo características, precios y
                        especificaciones de los productos descritos o reseñados
                        en el Servicio, en forma temporal o permanente, en
                        cualquier momento, sin previo aviso y sin
                        responsabilidad alguna.
                      </p>
                      <p>
                        1.4 Usted afirma que tiene más de 18 años de edad y que
                        es completamente capaz y competente para aceptar los
                        términos, condiciones, obligaciones, afirmaciones,
                        representaciones y garantías establecidas en estos
                        Términos y condiciones y para cumplir con los mismos.
                        Los Servicios son exclusivamente para el uso de adultos
                        mayores de dieciocho (18) años, y si tiene menos de
                        dieciocho (18) años, tiene prohibido usar los Servicios.
                      </p>
                    </ul>
                    <h4>2. Vinculación jurídica.</h4>
                    <ul>
                      <p>
                        2.1 Estas condiciones del usuario son jurídicamente
                        vinculantes.
                      </p>
                      <p className="mt-2">
                        2.2 Las condiciones estipuladas para el usuario son un
                        contrato jurídicamente vinculante entre usted y
                        nosotros. Como parte de estas condiciones de usuario,
                        acepta cumplir la versión más reciente de nuestro
                        acuerdo de términos y nuestra Política de Privacidad.
                      </p>
                    </ul>
                    <h4>3. Derechos y licencias.</h4>
                    <ul>
                      <p>
                        3.1 Al aceptar estos Términos de Servicio, se le concede
                        a usted un derecho limitado, no exclusivo,
                        intransferible y no sublicenciable, para entrar, acceder
                        y utilizar el Servicio exclusivamente para uso personal
                        y no comercial. Todos los derechos que no se le concedan
                        expresamente a usted en estos Términos de Servicio,
                        están reservados por la Compañía y sus licenciadores,
                        según corresponda. Usted acepta que no tiene derechos
                        para copiar o reproducir en todo o en parte alguna
                        porción del Servicio, incluyendo sin que ello implique
                        limitación alguna, el contenido. Aparte de la licencia
                        limitada que se otorga en la presente sección, usted no
                        tiene ningún otro derecho, título ni participación en el
                        Servicio. Usted entiende y reconoce que, en todas las
                        circunstancias, sus derechos con respecto al Servicio
                        estarán limitados por los derechos de autor o las leyes
                        de propiedad intelectual pertinentes y los presentes
                        Términos de Servicio.
                      </p>
                      <p className="mt-2">
                        3.2 El Servicio incluye componentes de seguridad por lo
                        que se aplican normas y políticas especiales. Usted no
                        deberá intentar (ni apoyar los intentos de otros)
                        eludir, aplicar ingeniería inversa, descifrar,
                        descompilar, desmontar o de algún modo modificar,
                        alterar o interferir con ningún aspecto del Servicio.
                        Usted no podrá distribuir, intercambiar, modificar,
                        vender o revender, o transmitir a cualquier otra persona
                        cualquier parte del Servicio, incluyendo, sin
                        limitación, cualquier texto, imagen o audio, para
                        cualquier propósito empresarial, comercial o público.
                        Usted conviene en no copiar, vender, distribuir o de
                        algún modo transferir Contenido de Roalytics, salvo del
                        modo expresamente permitido en el presente.
                      </p>
                      <p className="mt-2">
                        3.3 Servicio técnico. El soporte técnico para los
                        Servicios se proporciona como se establece en la
                        Descripción del Servicio correspondiente. La Compañía se
                        reserva el derecho de actualizar los Servicios a su
                        discreción. Las actualizaciones de los Servicios están
                        incluidas en las Tarifas, y el Cliente acepta utilizar
                        la versión más reciente del Servicio.
                      </p>
                    </ul>
                    <h4>4. Derecho de propiedad intelectual.</h4>
                    <ul>
                      <p>
                        4.1 El Servicio contiene y/o incorpora secretos
                        comerciales, inventos patentados (y/o con patente
                        pendiente) y / u otros materiales de propiedad exclusiva
                        y propiedad intelectual de la Compañía y/o sus
                        licenciadores. Todos los derechos de título y propiedad
                        en el Servicio, incluyendo sin que signifique limitación
                        alguna el contenido Roalytics y cualquier copia
                        relacionada con el Servicio y el contenido de Roalytics,
                        permanecen bajo la propiedad de la Compañía y sus
                        licenciadores, según corresponda. Usted conviene en
                        mantener en forma confidencial aquella información
                        contenida en el Servicio que no sea de dominio público,
                        y no revelar dicha información a terceros sin la
                        aprobación previa por escrito de la Compañía.
                      </p>
                      <p className="mt-2">
                        4.2 Derechos de autor. El Contenido de Roalytics y otras
                        obras de autoría que se encuentran en el Servicio, o
                        forman parte del mismo (colectivamente, el “Contenido”),
                        están protegidos por las leyes aplicables de derechos de
                        autor y los tratados internacionales de derechos de
                        autor, así como por otras leyes y tratados de propiedad
                        intelectual. El Contenido se licencia, no se vende.
                        Usted no puede realizar copias no autorizadas o utilizar
                        ninguna parte del Contenido, salvo como se especifica en
                        este documento y de conformidad con la legislación
                        aplicable. Todos los títulos y derechos de autor del
                        Contenido y del Servicio (incluyendo sin que ello
                        implique limitación alguna, imágenes, ilustraciones,
                        gráficos, fotografías, animaciones, vídeo, audio,
                        música, texto, guiones, archivos, URL’s, documentos y
                        características interactivas incluidas o disponibles a
                        través del Servicio), son propiedad de la Compañía o sus
                        licenciadores.
                      </p>
                      <p className="mt-2">
                        4.3 Si la Compañía recibe una notificación alegando que
                        usted se ha involucrado en una conducta que viola
                        cualquiera de los derechos de propiedad intelectual de
                        la Compañía, o de un tercero, o razonablemente sospecha
                        esto, la Compañía podrá suspender o dar por terminado su
                        acceso al Servicio, sin previo aviso. Si la Compañía
                        actúa conforme a esta Sección, la misma no tendrá
                        responsabilidad alguna frente a usted, incluso por
                        cualquier cantidad que haya pagado previamente o
                        cualquier crédito que tenga en el Servicio.
                      </p>
                      <p className="mt-2">
                        4.4 Marcas comerciales. No puede utilizar ninguna de las
                        marcas comerciales que se encuentran dentro del
                        Servicio, salvo lo especificado en el presente y de
                        conformidad con la legislación aplicable. No puede
                        copiar, exhibir, registrar o utilizar ninguna de las
                        marcas comerciales sin el permiso previo por escrito del
                        propietario. Cualquier uso no autorizado podría violar
                        las leyes de marcas comerciales, las leyes de privacidad
                        y publicidad, así como las leyes civiles o penales. Nada
                        de lo contenido en el Servicio deberá interpretarse como
                        una concesión por impedimento o de algún otro modo, de
                        cualquier licencia o derecho de uso de cualquier marca.
                        En caso de incumplimiento de esta disposición, el
                        Cliente acepta que hará todo lo necesario para efectuar
                        la transferencia de cualquier marca comercial, marca de
                        servicio, nombre comercial, nombre comercial/compañía,
                        nombre de dominio o nombre de cuenta de redes sociales
                        iguales o similares o manejar a la Compañía, que
                        incluye, entre otros, la ejecución de la documentación
                        de la asignación.
                      </p>
                      <p className="mt-2">
                        4.5 Usted acepta que cualquier idea, sugerencia o mejora
                        que proporcione a la Compañía sobre los productos o
                        servicios de la Compañía serán propiedad de la Compañía
                        y que la Compañía es libre de incluir tales ideas en
                        productos futuros sin compensación para usted.
                      </p>
                    </ul>
                    <h4>5. Conducta prohibida.</h4>
                    <ul>
                      <p>
                        5.1 Usted no utilizará el Servicio para transmitir,
                        mostrar, ejecutar o de algún modo poner a disposición
                        mensajes, contenidos o materiales que sean ilegales,
                        obscenos, amenazantes, masivos no solicitados o “spam”,
                        difamatorios, invasores de la privacidad, o que violen o
                        infrinjan derechos de autor, marcas registradas,
                        patentes, secretos comerciales y otros derechos de
                        propiedad intelectual, derechos de privacidad o
                        publicidad, reglamentos o estatutos de comunicaciones, o
                        cualesquiera otras leyes, incluyendo, sin limitación,
                        las leyes sobre difamación, acoso, obscenidad y
                        pornografía; que constituyan campañas políticas o
                        solicitudes de venta o marketing o que contengan virus
                        informáticos u otro código de computadora destinado a
                        interferir con la funcionalidad de los sistemas de
                        computadoras, o que de alguna manera perjudiquen a los
                        menores. Usted conviene en no interrumpir ni intentar
                        interrumpir la operación o el Servicio de ninguna
                        manera. Cualquier violación a lo aquí dispuesto, estará
                        sujeta a la revisión y las acciones pertinentes que la
                        Compañía decida adoptar, a su sola consideración e
                        inclusive proceder al derecho de Terminar el Servicio.
                        Además, no podrá utilizar una dirección de correo
                        electrónico falsa o de algún modo engañar a otros
                        miembros en cuanto a su identidad o al origen de un
                        mensaje o contenido.
                      </p>
                    </ul>
                    <h4>6. Cargos y facturación.</h4>
                    <ul>
                      <p>
                        6.1 Acuerdo de pago. Usted como usuario del Servicio
                        debe aceptar, en primer lugar, estos Términos de
                        Servicio, y llenar una autorización de pago y suscribir
                        los Términos y Condiciones de Compra (“Términos de
                        Compra”). Usted acepta pagar por todo el Contenido del
                        servicio que no se obtenga por medio de un código de
                        promoción o que la Compañía no le haya ofrecido en forma
                        gratuita.
                      </p>
                      <p>
                        6.2 Política de reembolso. Luego de transcurridos
                        treinta (30) días desde la fecha de compra del servicio,
                        los pagos o cargos realizados no son reembolsables. El
                        cliente Cualquier reembolso que la Compañía le deba
                        realizar, será acreditado en el instrumento que usted
                        designe la primera vez que realice una compra o incurra
                        en un cargo en el Servicio.
                      </p>
                      <p>
                        6.3 Pagos atrasados. La Compañía se reserva el derecho,
                        a su discreción, de suspender o cancelar los Servicios o
                        cualquier parte de los mismos por falta de pago de
                        Tarifas indiscutibles, e imponer un cargo para restaurar
                        los datos archivados de las cuentas morosas. El Cliente
                        acepta reembolsar a la Compañía todos los costos y
                        gastos razonables incurridos en el cobro de montos
                        atrasados.
                      </p>
                      <p>
                        6.4 Terminación. La Compañía se reserva el derecho a dar
                        por terminada su Cuenta de Roalytics y/o el acceso por
                        parte de usted al Servicio si infringe los Términos de
                        Servicio. Si se diera por terminada su membresía y
                        suscripción al Servicio, no serán reembolsables las
                        cuotas ni los cargos.
                      </p>
                      <p>
                        6.5 Impuestos. Las compras en el Servicio pueden incluir
                        el impuesto sobre ventas o el impuesto al valor agregado
                        (cuando proceda) y dicho impuesto se basará en la mejor
                        información disponible acerca de su dirección. En tales
                        casos, se aplicará el tipo impositivo que esté en vigor
                        en el momento en que se realicen las compras en el
                        Servicio. Si cambia el tipo impositivo aplicable a las
                        ventas antes de finalizar las compras correspondientes,
                        se aplicará el nuevo tipo impositivo que esté en vigor
                        en el momento de concretar la compra en el Servicio.
                        Podrían aplicarse otras limitaciones y renuncias a
                        responsabilidad sobre productos y servicios. Usted será
                        el único responsable de pagar la totalidad de dichos
                        impuestos.
                      </p>
                      <p>
                        6.6 Derecho al cambio de precios. Todos los precios
                        relacionados con el Servicio están sujetos a cambios por
                        la Compañía en cualquier momento, sin previo aviso y sin
                        responsabilidad alguna hacia usted. La Compañía no
                        ofrece una protección de precios o reembolsos en caso de
                        una caída de precios o una oferta promocional.
                      </p>
                    </ul>
                    <h4>7. Notificaciones especiales.</h4>
                    <ul>
                      <p>
                        7.1 Privacidad. Al registrarse en el Servicio, usted
                        otorga su consentimiento para la recopilación y
                        procesamiento de toda la información relacionada con el
                        uso que usted hace del Servicio, incluyendo la
                        Información de Registro. La Compañía recopila y maneja
                        esta información de conformidad con los términos de la
                        Política de Privacidad, que queda expresamente
                        incorporada en estos Términos de Servicio mediante
                        referencia. Al aceptar estos Términos de Servicio, usted
                        también acepta la Política de Privacidad la cual está
                        disponible en el sitio web de la Compañía.
                      </p>
                      <p>
                        7.2 Exactitud de la información. Usted declara y
                        garantiza que toda la información (incluída la
                        Información de Registro y las respuestas a los sondeos y
                        encuestas) que proporciona a la Compañía es correcta,
                        completa y vigente, y se compromete a actualizar dicha
                        información cuando sea necesario. También admite que
                        cualquier información proporcionada por usted a la
                        Compañía no violará ninguna ley o reglamento, ni
                        infringirá los derechos de terceros.
                      </p>
                      <p>
                        7.3 Certificación de residencia y capacidad para
                        celebrar contratos. Al abrir una Cuenta, usted declara y
                        garantiza a la Compañía que reside en el territorio que
                        ha indicado en su perfil y que tiene capacidad para
                        celebrar contratos de conformidad con las leyes de su
                        jurisdicción.
                      </p>
                      <p>
                        7.4 Riesgo de uso. Ni la Compañía ni sus Afiliadas
                        asumirán responsabilidad alguna y no serán responsables
                        por ningún daño o virus que provoque algún daño a su
                        computadora u otra propiedad como consecuencia del
                        acceso, uso, descarga o navegación por el Servicio.
                      </p>
                      <p>
                        7.5 Enlaces de otros sitios Web a sitios de terceros;
                        noticias RSS. La Compañía no es responsable del
                        contenido o la disponibilidad de las noticias en formato
                        RSS ni de sitios web relacionados con el Servicio, ni
                        tampoco lo es de sitios web de terceros que tengan
                        enlaces hacia o desde el Servicio. El acceso por parte
                        de usted a noticias RSS y enlaces a otros sitios Web
                        queda a riesgo de usted por completo. Todas las noticias
                        RSS y los enlaces se proporcionan únicamente para su
                        comodidad y no deberán interpretarse como un aval del
                        propietario/patrocinador del sitio. La Compañía renuncia
                        a cualquier garantía, ya sea expresa o implícita, en
                        cuanto a la exactitud, calidad o cualquier otro aspecto
                        de cualquier material o información que contengan dichas
                        noticias RSS y sitios Web.
                      </p>
                      <p>
                        7.6 En ningún caso, la compañía será responsable por
                        daños y perjuicios directos, emergentes, ejemplares,
                        cuantificables, indirectos, accesorios o punitivos,
                        lucro cesante, sin importar su causa, que surjan de o en
                        relación con el servicio. Estos términos de servicio o
                        el objeto de cualquiera de lo que antecede, bajo ninguna
                        teoría de responsabilidad, incluyendo, entre otros:
                        daños y perjuicios derivados de la pérdida de datos,
                        lucro cesante, pérdida del uso del servicio y cualquier
                        descarga o cualquier equipo relacionado, tiempo de
                        inactividad y tiempo del usuario, aunque la compañía y
                        sus afiliadas hayan sido notificadas sobre la
                        posibilidad de tales daños y perjuicios; daños y
                        perjuicios derivados del uso que usted haga del servicio
                        y que infrinja estos términos de servicio, en particular
                        las limitaciones con respecto al uso. Bajo ninguna
                        circunstancia la compañía o sus afiliadas serán
                        responsables por el uso no autorizado de cualquier
                        contenido o cualquier uso del servicio para desarrollar,
                        distribuir o utilizar cualquier material que sea
                        difamatorio, calumnioso, injurioso u obsceno, que dé una
                        falsa impresión de cualquier persona, que constituya una
                        invasión de cualquier derecho a la privacidad o una
                        infracción de cualquier derecho a la publicidad, que
                        viole o infrinja los derechos de cualquier tercero o que
                        infrinja cualquier ley o regulación extranjera, federal,
                        estatal o local.
                      </p>
                    </ul>
                    <h4>8. Ley Aplicable y Jurisdicción territorial.</h4>
                    <ul>
                      <p>
                        8.1 Estos Términos de Servicio y el uso que usted hace
                        del Servicio se regirán de conformidad con las leyes del
                        Estado de Florida. Usted conviene en que cualquier
                        demanda o controversia con la Compañía o con cualquier
                        Afiliada, o bien que surja de o en relación a estos
                        Términos de Servicio, el Servicio o el uso que usted
                        hace de cualquiera de estos, será entablada en un
                        tribunal estatal o federal apropiado con sede en el
                        Condado de Miami-Dade, Florida. Usted acepta someterse a
                        la exclusiva jurisdicción y competencia territorial de
                        estos tribunales y renunciar a cualquier objeción en
                        cuanto a la jurisdicción, competencia territorial o
                        tribunal inapropiado de tales tribunales. Las partes no
                        plantearán una disputa en relación con eso, y por este
                        medio renuncian a juicio por jurado y/o a cualquier
                        defensa en razón de la competencia territorial, tribunal
                        inapropiado, la falta de jurisdicción personal, la
                        suficiencia de notificación de actos procesales u otras
                        razones similares en cualquiera de dichas acciones o
                        litigios. En la medida permitida por la ley, las
                        disposiciones de estos términos de servicio reemplazarán
                        a las disposiciones del código de comercio uniforme y la
                        ley de transacciones electrónicas uniformes que adopten
                        o apliquen al servicio en cualquier jurisdicción
                        competente.
                      </p>
                      <p>
                        8.2 A solicitud de la Compañía, usted acepta defender,
                        indemnizar y eximir de responsabilidad a la Compañía y a
                        sus otras compañías afiliadas, y a sus empleados,
                        contratistas, funcionarios y directores de todas las
                        responsabilidades, reclamos y gastos, incluidos los
                        honorarios de abogados, que surjan de su mal uso del
                        Sitio Web o de los Servicios.
                      </p>
                      <p>
                        8.3 En cualquier disputa, acción, procedimiento o
                        arbitraje relacionado con el uso del Sitio web, los
                        Servicios o estos Términos y condiciones, incluida la
                        aplicación de cualquier disposición de arbitraje aquí
                        contenida, la parte que prevalezca en dicha acción o
                        procedimiento tendrá derecho a recuperar, en además de
                        cualquier otra adjudicación de daños u otros recursos,
                        los honorarios, costos y gastos razonables de sus
                        abogados y expertos (incluidos, entre otros, los gastos
                        de los testigos expertos y todos los honorarios, costos
                        y gastos razonables de los abogados en caso de
                        apelación).
                      </p>
                    </ul>
                    <h4>9. ¿Cómo contactarnos?</h4>
                    <ul>
                      <p>
                        9.1 Nuestros sitios web y servicios son proporcionados
                        por: Nombre de la compañía:. Roalytics LLC.
                        <br />
                        Página web: https://roalytics.com
                        <br />
                        Correo electrónico: soporte@roalytics.com
                        <br />
                        Si desea ponerse en contacto con nosotros por cualquier
                        motivo, puede hacerlo utilizando la información de
                        contacto que figura en esta sección.
                      </p>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterMenu />
    </>
  );
};

export default Terminosycondiciones;
