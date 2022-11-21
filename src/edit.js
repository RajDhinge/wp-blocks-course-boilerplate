import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	BlockControls,
} from '@wordpress/block-editor';
import './editor.scss';
import {
	ToolbarGroup,
	ToolbarButton,
	ToolbarDropdownMenu,
} from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
	const { text } = attributes;
	return (
		<>
			<BlockControls
				controls={[
					{
						titl: 'Button 1',
						icon: 'admin-generic',
						isActive: true,
						// eslint-disable-next-line no-console
						onClick: () => console.log('Button 1'),
					},
					{
						titl: 'Button 2',
						icon: 'admin-users',
						isActive: true,
						// eslint-disable-next-line no-console
						onClick: () => console.log('Button 2'),
					},
				]}
			>
				<ToolbarGroup>
					<ToolbarButton
						title="Align Left"
						icon="editor-alignleft"
						// eslint-disable-next-line no-console
						onClick={() => console.log('Align Left')}
					/>
					<ToolbarButton
						title="Align Center"
						icon="editor-aligncenter"
						// eslint-disable-next-line no-console
						onClick={() => console.log('Align Center')}
					/>
					<ToolbarButton
						title="Align Right"
						icon="editor-alignright"
						// eslint-disable-next-line no-console
						onClick={() => console.log('Align Right')}
					/>
					<ToolbarDropdownMenu
						icon="editor-aligncenter"
						controls={[
							{
								title: 'Align Left',
								icon: 'editor-alignleft',
								// eslint-disable-next-line no-console
								onClick: () => console.log('Align Left'),
							},
							{
								title: 'Align Center',
								icon: 'editor-aligncenter',
								// eslint-disable-next-line no-console
								onClick: () => console.log('Align Center'),
							},
							{
								title: 'Align Right',
								icon: 'editor-alignright',
								// eslint-disable-next-line no-console
								onClick: () => console.log('Align Right'),
							},
						]}
					/>
				</ToolbarGroup>
			</BlockControls>
			<RichText
				{...useBlockProps()}
				onChange={(value) => setAttributes({ text: value })}
				value={text}
				placeholder={__('Your text goes here!', 'text-box')}
				tagName="h4"
				allowedFormats={['core/bold']}
			/>
		</>
	);
}
