import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { text, alignment, backgroundColor, textColor } = attributes;
	return (
		<RichText.Content
			{...useBlockProps.save({
				className: `text-box-align-${alignment}`,
				style: {
					backgroundColor: backgroundColor.color,
					color: textColor,
				},
			})}
			tagName="h4"
			value={text}
		/>
	);
}
