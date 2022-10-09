CMS.registerPreviewStyle("./style.css");

const CategoriesControl = createClass({
    handleChange: function (e) {
        const separator = this.props.field.get('separator', ', ')
        this.props.onChange(e.target.value.split(separator).map((e) => e.trim()));
    },

    render: function () {
        const separator = this.props.field.get('separator', ', ');
        var value = this.props.value;
        return h('input', {
            id: this.props.forID,
            className: this.props.classNameWrapper,
            type: 'text',
            value: value ? value.join(separator) : '',
            onChange: this.handleChange,
        });
    },
});

const CategoriesPreview = createClass({
    render: function () {
        return h('ul', {"className": "tags"},
            this.props.value.map(function (val, index) {
                return h('li', {key: index, "className": "tag"}, val);
            })
        );
    }
});

const schema = {
    properties: {
        separator: {type: 'string'},
    },
}

CMS.registerWidget('categories', CategoriesControl, CategoriesPreview, schema);

CMS.registerEditorComponent({
    // Internal id of the component
    id: "youtube",
    // Visible label
    label: "Youtube",
    // Fields the user need to fill out when adding an instance of the component
    fields: [{name: 'id', label: 'Youtube Video ID', widget: 'string'}],
    // Pattern to identify a block as being an instance of this component
    pattern: /^youtube (\S+)$/,
    // Function to extract data elements from the regexp match
    fromBlock: function (match) {
        return {
            id: match[1]
        };
    },
    // Function to create a text block from an instance of this component
    toBlock: function (obj) {
        return 'youtube ' + obj.id;
    },
    // Preview output for this component. Can either be a string or a React component
    // (component gives better render performance)
    toPreview: function (obj) {
        return (
            '<img src="http://img.youtube.com/vi/' + obj.id + '/maxresdefault.jpg" alt="Youtube Video"/>'
        );
    }
});

CMS.registerEditorComponent({
    label: 'Image with Link',
    id: 'image_link',
    fromBlock: match =>
        match && {
            image: match[2],
            alt: match[1],
            title: match[4],
            url: match[5],
        },
    toBlock: ({alt, image, title, url}) =>
        `[![${alt || ''}](${image || ''}${title ? ` "${title.replace(/"/g, '\\"')}")](${url})` : ''}`,
    // eslint-disable-next-line react/display-name
    toPreview: ({alt, image, title, url}, getAsset, fields) => {
        const imageField = fields?.find(f => f.get('widget') === 'image_link');
        const src = getAsset(image, imageField);
        return '<a href={url}><img src={src || ""} alt={alt || ""} title={title || ""} /></a>';
    },
    pattern: /^!\[(.*)\]\((.*?)(\s"(.*)")?\)$/,
    fields: [
        {
            label: 'Image',
            name: 'image_link',
            widget: 'image',
            media_library: {
                allow_multiple: false,
            },
        },
        {
            label: 'Alt Text',
            name: 'alt',
        },
        {
            label: 'Title',
            name: 'title',
        },
        {
            label: 'Link',
            name: 'url',
        },
    ],
})