class ContactFormController < ApplicationController
  def new
	@contact_form = ContactForm.new
  end

  def create
	begin
	  @contact_form = ContactForm.new(params[:contact_form])
	  @contact_form.request = request
	    if @contact_form.deliver
		  flash.now[:notice] = "Thank you for your message!"
		else
		  render :new
		end
	rescue ScriptError
	  flash[:error] = "Sorry, there appears to have been a problem and your message could not be sent"
    end
  end
end
