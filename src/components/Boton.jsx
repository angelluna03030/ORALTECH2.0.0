export const Boton = ({ titulo, icono, link, style  }) => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
           marginTop: "20px",
         
        }}>
            <a href={link} style={{
               textDecoration : "none"
            }}>
                {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                <button className="button">
                <img src={icono} alt="icono" style={{
                        width: '3em',
                        height: '3em',
                      
                      position : "relative",
                   top: "-125px"
                    }} />
                    <p className="text" style={style}>{titulo}</p>
                </button>
            </a>
        </div>
    );
};
