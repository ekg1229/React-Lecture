import React from "react";

const styles={
    navbar:{
        width:1000,
        height:70,
        backgroundColor:"purple",
        color: "white",
        fontWeight: "bold",
        fontSize: 30,
    },
    wrapper:{
        width:1000,
        height:500,
    },
    image:{
        width: 350,
        height: 500,
    },
    contentContainer:{
        width: 620,
        height: 500,
        marginLeft: 30,
        display: "flex",
        flexDirection: "Column",
    },
    titleText:{
        width: 200,
        color: "yellow",
        fontSize: 25,
        marginTop: 30,
    },
    yearText:{
        width: 200,
        color: "black",
        fontSize: 20,
        marginTop: 10,
    },
    genreText:{
        color: "black",
        fontSize: 20,
        marginTop: 10,
    },
    contentText:{
        color: "black",
        fontSize: 20,
        marginTop: 5,
    },
};

function Movie(props){
    return(
        <div>
            <div style={styles.navbar}>무비 스토리</div>
            <div style={styles.wrapper}>
                
                <div style={{float:"left"}}>
                    <img src={props.image} style={styles.image} alt="img"/>
                </div>

                <div style={{backgroundColor:props.color, float:"left"}}>
                    <div style={styles.contentContainer}>
                        <span>
                        <span style={styles.titleText}>{props.title}  </span>
                        <span style={styles.yearText}>  {props.year}</span>
                        </span>
                        <span style={styles.genreText}>{props.genre}</span>
                        <span style={styles.contentText}>{props.content}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Movie;