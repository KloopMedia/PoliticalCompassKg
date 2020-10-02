import React, {useEffect} from "react";
import "../../App.css"


export default function PrecentOfAnswered(props){
	const lengthQuestion = props.lenQuestions
	const current = props.currentQuestions;

	const precentOfAnswered = (current*100)/lengthQuestion
	return(
		<div style={{textAlign:"center"}}>
			<h4 id="precentOfAnswered" className="question_title">
				Сиз багыттаманы {Math.ceil(precentOfAnswered)}%га толтурдуңуз
			</h4>
		</div>
	)
}