class ButtonFormBuilder < ActionView::Helpers::FormBuilder
  def button(label, options={})
  
    default_class = options[:class] || 'btn'
    @template.button_tag(label.to_s.humanize, :class => default_class)
  end
end