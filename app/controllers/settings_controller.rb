class SettingsController < ApplicationController
  def profile
  end

  def git_token
  end

  def ssh_keys
    @ssh_keys = SshKey.where(user_id: current_user.id)
  end
end