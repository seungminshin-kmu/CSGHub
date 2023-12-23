require "administrate/base_dashboard"

class CampaignDashboard < Administrate::BaseDashboard
  # ATTRIBUTE_TYPES
  # a hash that describes the type of each of the model's fields.
  #
  # Each different type represents an Administrate::Field object,
  # which determines how the attribute is displayed
  # on pages throughout the dashboard.
  ATTRIBUTE_TYPES = {
    id: Field::Number,
    end_date: Field::DateTime,
    location: Field::String,
    name: Field::String,
    start_date: Field::DateTime,
    uuid: Field::String,
    created_at: Field::DateTime,
    updated_at: Field::DateTime,
    content: RichTextField,
    lead_form: Field::HasOne,
    organizer: Field::String,
    organizer_website: Field::String,
    pageviews: Field::Number,
    recommended: Field::Boolean,
    release: Field::Boolean,
    campaign_type: Field::Select.with_options(include_blank: true, collection: -> { Campaign.human_enum_options(:campaign_type) }),
    status: Field::Select.with_options(include_blank: true, collection: -> { Campaign.human_enum_options(:status) }),
    desktop_banner: Field::ActiveStorage,
    mobile_banner: Field::ActiveStorage,
  }.freeze

  # COLLECTION_ATTRIBUTES
  # an array of attributes that will be displayed on the model's index page.
  #
  # By default, it's limited to four items to reduce clutter on index pages.
  # Feel free to add, remove, or rearrange items.
  COLLECTION_ATTRIBUTES = %i[
    id
    name
    status
    lead_form
    recommended
    release
  ].freeze

  # SHOW_PAGE_ATTRIBUTES
  # an array of attributes that will be displayed on the model's show page.
  SHOW_PAGE_ATTRIBUTES = %i[
    id
    uuid
    name
    location
    start_date
    end_date
    organizer
    organizer_website
    pageviews
    recommended
    release
    campaign_type
    status
    created_at
    updated_at
    content
    lead_form
    desktop_banner
    mobile_banner
  ].freeze

  # FORM_ATTRIBUTES
  # an array of attributes that will be displayed
  # on the model's form (`new` and `edit`) pages.
  FORM_ATTRIBUTES = %i[
    name
    start_date
    end_date
    location
    organizer
    organizer_website
    recommended
    release
    campaign_type
    status
    content
    desktop_banner
    mobile_banner
  ].freeze

  # COLLECTION_FILTERS
  # a hash that defines filters that can be used while searching via the search
  # field of the dashboard.
  #
  # For example to add an option to search for open resources by typing "open:"
  # in the search field:
  #
  #   COLLECTION_FILTERS = {
  #     open: ->(resources) { resources.where(open: true) }
  #   }.freeze
  COLLECTION_FILTERS = {}.freeze

  # Overwrite this method to customize how campaigns are displayed
  # across all pages of the admin dashboard.
  #
  def display_resource(campaign)
    "Campaign ##{campaign.name}"
  end
end
