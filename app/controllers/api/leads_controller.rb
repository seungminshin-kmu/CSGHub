class Api::LeadsController < Api::ApplicationController
  def create
    lead = Lead.new(create_params)

    if lead.save
      render json: { message: "Lead created" }
    else
      render json: {message: "Failed to create lead"}, status: :bad_request
    end
  end

  def create_params
    params.require(:lead).permit(:name, :title, :phone, :company, :expertise, :introduction, :email, :company_site, :industry, :lead_source, :lead_type)
  end
end

