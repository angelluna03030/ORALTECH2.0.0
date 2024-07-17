export const BotonUbicacion = ({ titulo, icono, link, style  }) => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
           marginTop: "20px",
           textAlign: 'center',
            cursor: 'pointer',
            position : "relative",
            zIndex: 900
        }}>
            <a href={link} style={{
               textDecoration : "none",
               textAlign: 'center'
            }}>
                {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                <button className="button">
                <img src={icono} alt="icono" style={{
                        width: '3em',
                        height: '3em',
                      
                      position : "relative",
                   top: "-125px",
                   left : "-40px"
                    }} />
                    <p className="text" style={{
                     position:"relative",
                     left : "-50px"

                    }}>{titulo}</p>
                </button>
            </a>
        </div>
    );
};
