import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { text } = attributes;
	return (
		<RichText.content {...useBlockProps.save()} value={text} tagName="h4" />
	);
}
