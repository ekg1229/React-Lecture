import React from "react";

const styles={
    wrapper:{
        width:500,
        height:500,
    },
    image:{
        width: 500,
        height: 250,
    },
    contentContainer:{
        width: 550,
        height: 250,
        marginLeft: 10,
        display: "flex",
        flexDirection: "Column",
    },
    titleText:{
        color: "white",
        fontSize: 25,
        marginTop: 10,
    },
    distanceText:{
        color: "white",
        fontSize: 15,
        marginTop: 5,
    },
};

function Comment(props){
    return(
        <div style={styles.wrapper}>
            <div>
                <img src={props.image} style={styles.image} alt="img"/>
            </div>

            <div style={{backgroundColor:props.color, borderTopLeftRadius:0, borderTopRightRadius:0, borderBottomLeftRadius:20, borderBottomRightRadius:20}}>
                <div style={styles.contentContainer}>
                    <span style={styles.titleText}>{props.title}</span>
                    <span style={styles.distanceText}>{props.distance}km 거리</span>
                </div>
            </div>
        </div>
    )
}

export default Comment;