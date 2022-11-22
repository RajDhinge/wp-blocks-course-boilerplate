import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
	InspectorControls,
} from '@wordpress/block-editor';
import { PanelBody, ColorPalette } from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { text, alignment, backgroundColor } = attributes;

	const onChangeAlignment = (newAlignment) => {
		setAttributes({ alignment: newAlignment });
	};

	const onChangeText = (newText) => {
		setAttributes({ text: newText });
	};

	const onBackgroundColorChange = (newBackgroundColor) => {
		setAttributes({ backgroundColor: newBackgroundColor });
	};

	// const onChangeTextColor = ( newTextColor ) => {
	//     setAttributes({textColor:newTextColor});
	// }

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={__('Color Settings', 'text-box')}
					icon="admin-appearance"
					initialOpen
				>
					<ColorPalette
						colors={[
							{ name: 'red', color: '#F00' },
							{ name: 'black', color: '#0F0' },
						]}
						value={backgroundColor}
						onChange={onBackgroundColorChange}
					/>
				</PanelBody>
			</InspectorControls>

			<BlockControls>
				<AlignmentToolbar
					value={alignment}
					onChange={onChangeAlignment}
				/>
			</BlockControls>
			<RichText
				{...useBlockProps({
					className: `text-box-align-${alignment}`,
					style: {
						backgroundColor,
					},
				})}
				onChange={onChangeText}
				value={text}
				placeholder={__('Your text goes here!', 'text-box')}
				tagName="h4"
				allowedFormats={['core/bold']}
				style={{ textAlign: alignment }}
			/>
		</>
	);
}
