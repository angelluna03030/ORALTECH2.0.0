export const BotonMedellin = ({ titulo, icono, link, style }) => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: "20px",
            cursor: 'pointer',
            position : "relative",
            zIndex: 900
        }}>
            <a href={link} style={{
                textDecoration: "none",
                cursor: 'pointer'
            }}>
                {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
<button className="button" style={{ cursor: 'pointer' }}>
                    <img src={icono} alt="icono" style={{
                        width: '3em',
                        height: '3em',
                        position: "relative",
                        top: "-125px"
                    }} />
                    <p className="text" style={style}>{titulo}</p>
                </button>
            </a>
        </div>
    );
};