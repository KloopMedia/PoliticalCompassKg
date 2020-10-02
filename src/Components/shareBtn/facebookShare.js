import React from "react";
import {
	FacebookShareButton,
	FacebookIcon,
	VKShareButton,
	VKIcon,
	TwitterShareButton,
	TwitterIcon
} from "react-share";
import "../../App.css"

export default function FacebookShareBtn(props) {
	let message = props.indexLegends.map((el, i) => {
		if (props.legends[i].name == "Матраимовдор" || props.legends[i].name == "Жээнбеков") {
			let legend = Object.values(props.legends[i])[el]

			return legend
		}
	})

	message = message.filter(el => el != undefined)
	return (
		<div className={"buttonsShare"}>
			<TwitterShareButton
				className={'twitter'}
				url={props.compass_url}
				title={message.join(' ') + "\n\n" + `Мага — «${props.nearestParty}» партиясы жакын экен. Сагачы? Тесттен өтүп, билип ал:`}
			>
				<div>
					<TwitterIcon
						size={"2.5rem"}
						round
					/>
					{/*<p>Поделиться в Twitter</p>*/}
				</div>
			</TwitterShareButton>
			<FacebookShareButton
				className={'fbb'}
				url={props.compass_url}
				quote={message.join(' ') + "\n\n" + `Мага — «${props.nearestParty}» партиясы жакын экен. Сагачы? Тесттен өтүп, билип ал:${props.compass_url}`}
			>
				<div>
					<FacebookIcon
						size={"2.5rem"}
						round
					/>
					{/*<p>Поделиться в Facebook</p>*/}
				</div>
			</FacebookShareButton>
			<VKShareButton
				url={props.compass_url}
				title={message.join(' ') + "\n" + `Мага — «${props.nearestParty}» партиясы жакын экен. Сагачы? Тесттен өтүп, билип ал:`}
			>
				<div>
					<VKIcon
						size={"2.5rem"}
						round/>
					{/*<p>Поделиться в VK</p>*/}
				</div>
			</VKShareButton>
		</div>
	)
}