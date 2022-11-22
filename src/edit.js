import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
	InspectorControls,
	ContrastChecker,
	PanelColorSettings,
} from '@wordpress/block-editor';
import { PanelBody, ColorPalette } from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { text, alignment, backgroundColor, textColor } = attributes;

	const onChangeAlignment = (newAlignment) => {
		setAttributes({ alignment: newAlignment });
	};

	const onChangeText = (newText) => {
		setAttributes({ text: newText });
	};

	const onBackgroundColorChange = (newBackgroundColor) => {
		setAttributes({ backgroundColor: newBackgroundColor });
	};

	const onTextColorChange = (newTextColor) => {
		setAttributes({ textColor: newTextColor });
	};

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
							{ name: 'lime', color: '#0F0' },
						]}
						value={backgroundColor}
						onChange={onBackgroundColorChange}
					/>
					<ColorPalette
						colors={[
							{ name: 'red', color: '#F00' },
							{ name: 'lime', color: '#0F0' },
						]}
						value={textColor}
						onChange={onTextColorChange}
					/>
				</PanelBody>
				<PanelColorSettings
					title={__('Color Settings', 'text-box')}
					icon="admin-appearance"
					initialOpen
					disableCustomColors={false}
					colorSettings={[
						{
							value: backgroundColor,
							onChange: onBackgroundColorChange,
							label: __('Background Color', 'text-box'),
						},
						{
							value: textColor,
							onChange: onTextColorChange,
							label: __('Text Color', 'text-box'),
						},
					]}
				>
					<ContrastChecker
						textColor={textColor}
						backgroundColor={backgroundColor}
					/>
				</PanelColorSettings>
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
						color: textColor,
					},
				})}
				onChange={onChangeText}
				value={text}
				placeholder={__('Your text goes here!', 'text-box')}
				tagName="h4"
				allowedFormats={[]}
			/>
		</>
	);
}
